import { spawnSync } from 'child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, unlinkSync, writeFileSync } from 'fs';
import { tmpdir } from 'os';
import path from 'path';

interface PlaywrightStats {
  expected: number;
  unexpected: number;
  skipped: number;
  flaky: number;
}

interface RunResult extends PlaywrightStats {
  build: string;
  durationMs: number;
  runnerError?: string;
}

interface CaseResult {
  id: string;
  title: string;
  file: string;
  result: 'Pass' | 'Fail' | 'Blocked';
  error?: string;
}

interface ReportSpec {
  title: string;
  file: string;
  tests: Array<{ status: string; results: Array<{ error?: { message?: string } }> }>;
}

interface ReportSuite {
  specs?: ReportSpec[];
  suites?: ReportSuite[];
}

function collectCases(suites: ReportSuite[]): CaseResult[] {
  const cases: CaseResult[] = [];
  const visit = (suite: ReportSuite) => {
    for (const spec of suite.specs || []) {
      for (const test of spec.tests) {
        const id = spec.title.match(/^TC-[A-Z]+-\d+/)?.[0] || spec.title;
        const result = test.status === 'skipped' ? 'Blocked' : test.status === 'expected' ? 'Pass' : 'Fail';
        const error = test.results.flatMap(item => item.error?.message ? [item.error.message] : [])[0];
        cases.push({ id, title: spec.title, file: spec.file, result, ...(error ? { error: error.replace(/\u001b\[[0-9;]*m/g, '') } : {}) });
      }
    }
    for (const child of suite.suites || []) visit(child);
  };
  suites.forEach(visit);
  return cases;
}

function runBuildTest(build: string, outputDir: string, specPattern?: string): RunResult {
  console.log(`\nChạy Build ${build === '0' ? 'Prototype' : build}${specPattern ? ` (${specPattern})` : ''}...`);
  const startTime = Date.now();
  const selector = specPattern
    ? specPattern.includes('/') || specPattern.endsWith('.spec.ts')
      ? [specPattern]
      : [path.resolve(__dirname, '../specs'), `--grep=${specPattern}`]
    : [path.resolve(__dirname, '../specs')];
  const jsonOutputFile = path.join(tmpdir(), `calculator-playwright-${process.pid}-${build}-${Date.now()}.json`);
  const artifactsDir = mkdtempSync(path.join(tmpdir(), `calculator-build-${build}-`));
  const result = spawnSync('npm', [
    'run', 'test', '--',
    ...selector,
    '--reporter=json',
    '--retries=0',
    `--output=${artifactsDir}`,
  ], {
    encoding: 'utf8',
    maxBuffer: 50 * 1024 * 1024,
    env: { ...process.env, TARGET_BUILD: build, PLAYWRIGHT_JSON_OUTPUT_FILE: jsonOutputFile },
  });

  try {
    const report = JSON.parse(readFileSync(jsonOutputFile, 'utf8')) as { stats: PlaywrightStats & { startTime: string }; suites: ReportSuite[] };
    if (!report.stats || report.stats.expected + report.stats.unexpected + report.stats.skipped + report.stats.flaky === 0) {
      throw new Error('Không tìm thấy test case phù hợp');
    }
    const stats = report.stats;
    const cases = collectCases(report.suites || []);
    if (cases.length !== stats.expected + stats.unexpected + stats.skipped + stats.flaky) {
      throw new Error(`Số ca trong JSON (${cases.length}) không khớp thống kê Playwright`);
    }
    writeFileSync(path.join(outputDir, `build-${build}.json`), JSON.stringify({
      build,
      startedAt: stats.startTime,
      stats,
      cases,
    }, null, 2) + '\n');
    console.log(`Đạt ${stats.expected} | Lỗi ${stats.unexpected + stats.flaky} | Bị chặn ${stats.skipped}`);
    return { build, ...stats, durationMs: Date.now() - startTime };
  } catch (error) {
    const runnerError = [result.error?.message, result.stdout, result.stderr, String(error)].filter(Boolean).join('\n').trim();
    console.error(`Không đọc được kết quả Build ${build}: ${runnerError}`);
    return { build, expected: 0, unexpected: 0, skipped: 0, flaky: 0, durationMs: Date.now() - startTime, runnerError };
  } finally {
    if (existsSync(jsonOutputFile)) unlinkSync(jsonOutputFile);
    rmSync(artifactsDir, { recursive: true, force: true });
  }
}

function main() {
  const args = process.argv.slice(2);
  const runStartedAt = new Date();
  const runs: Array<[string, string | undefined]> = args.includes('--all-pairs')
    ? ['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(build => [build, undefined])
    : [[args[0] || '1', args[2]], [args[1] || '2', args[2]]];
  const outputDir = path.resolve(__dirname, '../../test-runs/automated', runStartedAt.toISOString().replace(/[:.]/g, '-'));
  mkdirSync(outputDir, { recursive: true });
  const results = runs.map(([build, pattern]) => runBuildTest(build, outputDir, pattern));
  console.table(results.map(result => ({
    Build: result.build === '0' ? 'Prototype' : result.build,
    Pass: result.expected,
    Fail: result.unexpected + result.flaky,
    Blocked: result.skipped,
    'Runner error': result.runnerError ? 'Yes' : '',
    Seconds: (result.durationMs / 1000).toFixed(1),
  })));
  writeFileSync(path.join(outputDir, 'summary.md'), [
    '# Kết quả chạy Playwright thực tế',
    '',
    `Thời điểm bắt đầu: ${runStartedAt.toISOString()}`,
    'Phạm vi: ' + runs.map(([build]) => `Build ${build}`).join(', '),
    'Lệnh điều phối: `npm run test:all-pairs`; với từng build, runner đặt `TARGET_BUILD` rồi gọi `npm run test -- ...`.',
    'Mỗi file JSON chứa kết quả theo Test Case ID và lỗi Playwright nếu có. Đây là kết quả thực thi, không phải bảng suy luận từ mã nguồn.',
    '',
    '| Build | Pass | Fail | Blocked | File |',
    '| --- | ---: | ---: | ---: | --- |',
    ...results.map(result => `| ${result.build} | ${result.expected} | ${result.unexpected + result.flaky} | ${result.skipped} | [build-${result.build}.json](build-${result.build}.json) |`),
    '',
    'Fail phản ánh sai khác với Expected result trong testcase; cần phân tích trước khi tạo bug report.',
    '',
  ].join('\n'));
  console.log(`Đã lưu kết quả: ${outputDir}`);
  process.exit(results.some(result => result.runnerError || result.unexpected || result.flaky || result.expected + result.skipped === 0) ? 1 : 0);
}

main();
