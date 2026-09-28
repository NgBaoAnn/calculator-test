import { spawnSync } from 'child_process';
import path from 'path';

interface RunResult {
  build: string;
  success: boolean;
  durationMs: number;
}

function runBuildTest(build: string, specPattern?: string): RunResult {
  console.log(`\n========================================`);
  console.log(`🚀 BẮT ĐẦU CHẠY KIỂM THỬ TRÊN BUILD: ${build}`);
  console.log(`========================================`);

  const startTime = Date.now();
  const configPath = path.resolve(__dirname, '../playwright.config.ts');

  const args = [
    'playwright',
    'test',
    specPattern ? specPattern : path.resolve(__dirname, '../specs'),
    `--config=${configPath}`,
    '--reporter=list'
  ];

  const env = {
    ...process.env,
    TARGET_BUILD: build,
  };

  const result = spawnSync('npx', args, {
    stdio: 'inherit',
    env,
  });

  const durationMs = Date.now() - startTime;
  const success = result.status === 0;

  return {
    build,
    success,
    durationMs,
  };
}

function runPair(buildA: string, buildB: string, specPattern?: string): RunResult[] {
  console.log(`\n🏁 KHỞI ĐỘNG TEST RUN CHO CẶP: BUILD ${buildA} & BUILD ${buildB}`);
  const resultA = runBuildTest(buildA, specPattern);
  const resultB = runBuildTest(buildB, specPattern);
  return [resultA, resultB];
}

async function main() {
  const args = process.argv.slice(2);
  const results: RunResult[] = [];

  if (args.includes('--all-pairs')) {
    const pairs: [string, string][] = [
      ['1', '2'],
      ['3', '4'],
      ['5', '6'],
      ['7', '8'],
      ['9', '0'] // Build 9 và Prototype
    ];

    console.log('📦 Chế độ: Chạy toàn bộ 9 Build theo từng cặp 2 Build...');
    for (const [a, b] of pairs) {
      const pairResults = runPair(a, b);
      results.push(...pairResults);
    }
  } else {
    // Chỉ định 2 build từ tham số dòng lệnh (mặc định Build 1 và Build 2)
    const buildA = args[0] || '1';
    const buildB = args[1] || '2';
    const spec = args[2];

    const pairResults = runPair(buildA, buildB, spec);
    results.push(...pairResults);
  }

  // Bảng tổng kết kết quả
  console.log(`\n======================================================`);
  console.log(`📊 TỔNG KẾT KẾT QUẢ TEST RUN CHO CÁC PHIÊN BẢN BUILD`);
  console.log(`======================================================`);
  console.table(
    results.map(r => ({
      'Phiên bản Build': `Build ${r.build === '0' ? '0 (Prototype)' : r.build}`,
      'Trạng thái': r.success ? '✅ PASSED' : '❌ FAILED',
      'Thời gian chạy': `${(r.durationMs / 1000).toFixed(1)}s`
    }))
  );

  const hasFailed = results.some(r => !r.success);
  process.exit(hasFailed ? 1 : 0);
}

main().catch(err => {
  console.error('Lỗi thực thi:', err);
  process.exit(1);
});
