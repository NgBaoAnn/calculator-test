* commit 14bb4502248feaecfb92a84278b8fe084c87f45f
| Author: tzin1401 <nguyenlethevinh14@gmail.com>
| Date:   Mon Sep 28 20:22:33 2026 +0700
| 
|     Publish verified calculator bug reports
| 
|  docs/AI_Audit_Report/ai-audit-report-23120190.md |  28 +
|  tests/test-runs/README.md                        |   9 +-
|  tests/test-runs/bug-reports-draft.md             | 268 +--------
|  tests/test-runs/bug-reports.md                   | 663 +++++++++++++++++++++
|  tests/test-runs/source-findings.md               |   4 +-
|  5 files changed, 700 insertions(+), 272 deletions(-)
| 
* commit f445eca13ad40fab6e057ecb0a0522345924be61
| Author: tzin1401 <nguyenlethevinh14@gmail.com>
| Date:   Mon Sep 28 20:08:06 2026 +0700
| 
|     Align Playwright cases and record Build 1-9 test runs
| 
|  docs/AI_Audit_Report/ai-audit-report-23120190.md  | 343 ++++++++++++++
|  .../2026-09-28T12-26-44-978Z/build-1.json         | 442 ++++++++++++++++++
|  .../2026-09-28T12-26-44-978Z/build-2.json         | 461 +++++++++++++++++++
|  .../2026-09-28T12-26-44-978Z/build-3.json         | 443 ++++++++++++++++++
|  .../2026-09-28T12-26-44-978Z/build-4.json         | 444 ++++++++++++++++++
|  .../2026-09-28T12-26-44-978Z/build-5.json         | 434 ++++++++++++++++++
|  .../2026-09-28T12-26-44-978Z/build-6.json         | 437 ++++++++++++++++++
|  .../2026-09-28T12-26-44-978Z/build-7.json         | 484 ++++++++++++++++++++
|  .../2026-09-28T12-26-44-978Z/build-8.json         | 473 +++++++++++++++++++
|  .../2026-09-28T12-26-44-978Z/build-9.json         | 429 +++++++++++++++++
|  .../automated/2026-09-28T12-26-44-978Z/summary.md |  20 +
|  tests/test-runs/sprint-1-test-run.md              | 426 ++++++++---------
|  tests/test-runs/sprint-2-regression.md            | 424 ++++++++---------
|  tests/test-runs/sprint-3-regression.md            | 424 ++++++++---------
|  tests/test-scripts/fixtures/base-test.ts          |   2 +-
|  tests/test-scripts/pages/calculator.page.ts       |  53 +--
|  tests/test-scripts/runners/build-pair-runner.ts   | 203 ++++----
|  .../specs/module-1-arithmetic.spec.ts             |  40 +-
|  .../test-scripts/specs/module-2-division.spec.ts  |  37 +-
|  .../specs/module-3-concatenate.spec.ts            |  78 +---
|  .../specs/module-4-formatting.spec.ts             | 303 ++++++------
|  21 files changed, 5394 insertions(+), 1006 deletions(-)
| 
* commit a3679c1deb2df20b89de552b8a31068fccadcbe4
| Author: tzin1401 <nguyenlethevinh14@gmail.com>
| Date:   Mon Sep 28 16:10:51 2026 +0700
| 
|     chore(issues): align bug template with triage rules
| 
|  .github/ISSUE_TEMPLATE/bug_report.md | 17 ++++++++++-------
|  1 file changed, 10 insertions(+), 7 deletions(-)
|   
*   commit eb2a3b7518505e25b56b1b4ae0854ddbd336ea9b
|\  Merge: 35d0663 a801be7
| | Author: 23120231 <nhatdat2905@gmail.com>
| | Date:   Mon Sep 28 16:07:52 2026 +0700
| | 
| |     Merge branch 'main' of https://github.com/NgBaoAnn/calculator-test
| | 
| * commit a801be7c48d7ed407b817fb9de00326c2d647846
| | Author: NgBaoAnn <baoan1real1@gmail.com>
| | Date:   Mon Sep 28 16:04:14 2026 +0700
| | 
| |     refactor(tests): move test-scripts into tests/ directory
| | 
| |  package.json                                                  | 6 +++---
| |  {test-scripts => tests/test-scripts}/README.md                | 8 ++++----
| |  .../test-scripts}/data/module-1-arithmetic.data.ts            | 0
| |  .../test-scripts}/data/module-2-division.data.ts              | 0
| |  .../test-scripts}/data/module-3-concatenate.data.ts           | 0
| |  .../test-scripts}/data/module-4-formatting.data.ts            | 0
| |  {test-scripts => tests/test-scripts}/data/types.ts            | 0
| |  {test-scripts => tests/test-scripts}/fixtures/base-test.ts    | 0
| |  {test-scripts => tests/test-scripts}/pages/calculator.page.ts | 0
| |  {test-scripts => tests/test-scripts}/playwright.config.ts     | 2 +-
| |  .../test-scripts}/runners/build-pair-runner.ts                | 2 +-
| |  .../test-scripts}/specs/module-1-arithmetic.spec.ts           | 0
| |  .../test-scripts}/specs/module-2-division.spec.ts             | 0
| |  .../test-scripts}/specs/module-3-concatenate.spec.ts          | 0
| |  .../test-scripts}/specs/module-4-formatting.spec.ts           | 0
| |  tsconfig.json                                                 | 2 +-
| |  16 files changed, 10 insertions(+), 10 deletions(-)
| | 
* | commit 35d0663e9e501e5e18ae8d55ecfb718fd26a3c67
|/  Author: 23120231 <nhatdat2905@gmail.com>
|   Date:   Mon Sep 28 16:07:45 2026 +0700
|   
|       feat(bug-reports): enhance bug report templates with detailed structure and examples
|   
|    .github/ISSUE_TEMPLATE/bug_report.md |  63 +++++---
|    tests/test-runs/bug-reports-draft.md | 267 +++++++++++++++++++++++++++++++
|    2 files changed, 311 insertions(+), 19 deletions(-)
| 
* commit b440840f16573477c58d504a54e31856e9e7dbca
| Author: NgBaoAnn <baoan1real1@gmail.com>
| Date:   Mon Sep 28 15:57:57 2026 +0700
| 
|     feat(test-scripts): add 2-build batch runner and test documentation
| 
|  test-scripts/README.md                    |  67 +++++++++++++++++++
|  test-scripts/runners/build-pair-runner.ts | 100 ++++++++++++++++++++++++++++
|  2 files changed, 167 insertions(+)
| 
* commit 04f29b8fa46a986190d1d496651190463b363706
| Author: NgBaoAnn <baoan1real1@gmail.com>
| Date:   Mon Sep 28 15:56:22 2026 +0700
| 
|     feat(test-scripts): implement Playwright test suites for modules 3 and 4
| 
|  test-scripts/pages/calculator.page.ts           |  37 +++--
|  test-scripts/playwright.config.ts               |   2 +-
|  test-scripts/specs/module-3-concatenate.spec.ts |  84 ++++++++++
|  test-scripts/specs/module-4-formatting.spec.ts  | 182 ++++++++++++++++++++++
|  4 files changed, 293 insertions(+), 12 deletions(-)
| 
* commit f55674a2068865d1dcb4f2471b9e0b45695d9c03
| Author: NgBaoAnn <baoan1real1@gmail.com>
| Date:   Mon Sep 28 15:31:56 2026 +0700
| 
|     feat(test-scripts): implement Playwright test suites for modules 1 and 2
| 
|  test-scripts/pages/calculator.page.ts          | 27 ++++++++-
|  test-scripts/playwright.config.ts              |  2 +-
|  test-scripts/specs/module-1-arithmetic.spec.ts | 60 +++++++++++++++++++
|  test-scripts/specs/module-2-division.spec.ts   | 74 ++++++++++++++++++++++++
|  4 files changed, 160 insertions(+), 3 deletions(-)
| 
* commit fc0c4fb9e10f0e9858c6d274f840014f6ed68dc9
| Author: NgBaoAnn <baoan1real1@gmail.com>
| Date:   Mon Sep 28 15:17:38 2026 +0700
| 
|     feat(test-scripts): add typed test data registry for modules 1 through 4
| 
|  test-scripts/data/module-1-arithmetic.data.ts  | 148 ++++++++++++++++++++
|  test-scripts/data/module-2-division.data.ts    | 108 +++++++++++++++
|  test-scripts/data/module-3-concatenate.data.ts | 164 +++++++++++++++++++++++
|  test-scripts/data/module-4-formatting.data.ts  |  97 ++++++++++++++
|  test-scripts/data/types.ts                     |  23 ++++
|  5 files changed, 540 insertions(+)
| 
* commit bd60f2109a80176ec38d7a3c343b3965c1988cc5
| Author: NgBaoAnn <baoan1real1@gmail.com>
| Date:   Mon Sep 28 15:16:07 2026 +0700
| 
|     feat(test-scripts): implement CalculatorPage POM and Playwright base fixture
| 
|  test-scripts/fixtures/base-test.ts    |  23 ++++++
|  test-scripts/pages/calculator.page.ts | 126 ++++++++++++++++++++++++++++++++
|  2 files changed, 149 insertions(+)
| 
* commit 42095d66a0028d9716dda01c2c1b31ba384dfdbd
| Author: NgBaoAnn <baoan1real1@gmail.com>
| Date:   Mon Sep 28 15:15:07 2026 +0700
| 
|     feat(test-scripts): initialize Playwright project configuration and dependencies
| 
|  .gitignore                        |   5 +
|  package-lock.json                 | 282 ++++++++++++++++++++++++++++++++++++
|  package.json                      |  26 ++++
|  test-scripts/playwright.config.ts |  35 +++++
|  tsconfig.json                     |  21 +++
|  5 files changed, 369 insertions(+)
| 
* commit b63b34777b6af358b86334b7088776fb952ca969
| Author: NgBaoAnn <baoan1real1@gmail.com>
| Date:   Mon Sep 28 15:12:24 2026 +0700
| 
|     docs: add Playwright test automation implementation plan
| 
|  .../plans/2026-09-28-playwright-automation.md     | 167 ++++++++++++++++++++
|  1 file changed, 167 insertions(+)
| 
* commit bcbd66a1325044b3acda705db4c6825aa5a9aa42
| Author: NgBaoAnn <baoan1real1@gmail.com>
| Date:   Mon Sep 28 15:11:35 2026 +0700
| 
|     docs: add Playwright test automation design spec
| 
|  .../2026-09-28-playwright-automation-design.md    | 117 ++++++++++++++++++++
|  1 file changed, 117 insertions(+)
| 
* commit 594871b3f164a8f4be6ca9d22fce82e1c35bfc23
| Author: Phạm Quang Vinh <vinhp1546@gmail.com>
| Date:   Mon Sep 28 15:57:31 2026 +0700
| 
|     Refactor code structure for improved readability and maintainability
| 
|  tests/test-runs/README.md                 |  30 +++
|  tests/test-runs/source-findings.md        |  47 +++++
|  tests/test-runs/sprint-1-test-run.md      | 297 +++++++++++++++++++++++-----
|  tests/test-runs/sprint-2-regression.md    | 267 ++++++++++++++++++++++---
|  tests/test-runs/sprint-3-regression.md    | 253 ++++++++++++++++++++++++
|  tests/test-summary/traceability-matrix.md |  10 +-
|  6 files changed, 827 insertions(+), 77 deletions(-)
| 
* commit 6c2979686a200f5d7881c4f9d27ef50249f427f2
| Author: Phạm Quang Vinh <vinhp1546@gmail.com>
| Date:   Mon Sep 28 15:00:58 2026 +0700
| 
|     test: parameterize test cases for builds 1 through 9
| 
|  tests/test-cases/module-1-arithmetic/TC-ARI-001.md    |  9 +++++----
|  tests/test-cases/module-1-arithmetic/TC-ARI-002.md    |  9 +++++----
|  tests/test-cases/module-1-arithmetic/TC-ARI-003.md    |  9 +++++----
|  tests/test-cases/module-1-arithmetic/TC-ARI-004.md    |  9 +++++----
|  tests/test-cases/module-1-arithmetic/TC-ARI-005.md    |  9 +++++----
|  tests/test-cases/module-1-arithmetic/TC-ARI-006.md    |  9 +++++----
|  tests/test-cases/module-1-arithmetic/TC-ARI-007.md    |  9 +++++----
|  tests/test-cases/module-1-arithmetic/TC-ARI-008.md    |  9 +++++----
|  tests/test-cases/module-1-arithmetic/TC-ARI-009.md    |  9 +++++----
|  tests/test-cases/module-1-arithmetic/TC-ARI-010.md    |  9 +++++----
|  tests/test-cases/module-1-arithmetic/TC-ARI-011.md    |  9 +++++----
|  tests/test-cases/module-1-arithmetic/TC-ARI-012.md    |  9 +++++----
|  tests/test-cases/module-1-arithmetic/TC-ARI-013.md    |  9 +++++----
|  tests/test-cases/module-1-arithmetic/TC-ARI-014.md    |  9 +++++----
|  tests/test-cases/module-1-arithmetic/TC-ARI-015.md    |  9 +++++----
|  tests/test-cases/module-1-arithmetic/TC-ARI-016.md    |  9 +++++----
|  tests/test-cases/module-1-arithmetic/TC-ARI-017.md    |  9 +++++----
|  tests/test-cases/module-1-arithmetic/TC-ARI-018.md    |  9 +++++----
|  tests/test-cases/module-2-division/TC-DIV-001.md      |  9 +++++----
|  tests/test-cases/module-2-division/TC-DIV-002.md      |  9 +++++----
|  tests/test-cases/module-2-division/TC-DIV-003.md      |  9 +++++----
|  tests/test-cases/module-2-division/TC-DIV-004.md      |  9 +++++----
|  tests/test-cases/module-2-division/TC-DIV-005.md      |  9 +++++----
|  tests/test-cases/module-2-division/TC-DIV-006.md      |  8 +++++---
|  tests/test-cases/module-2-division/TC-DIV-007.md      |  9 +++++----
|  tests/test-cases/module-2-division/TC-DIV-008.md      |  9 +++++----
|  tests/test-cases/module-2-division/TC-DIV-009.md      |  8 +++++---
|  tests/test-cases/module-2-division/TC-DIV-010.md      | 14 ++++++++------
|  tests/test-cases/module-2-division/TC-DIV-011.md      | 14 ++++++++------
|  tests/test-cases/module-2-division/TC-DIV-012.md      | 14 ++++++++------
|  tests/test-cases/module-2-division/TC-DIV-013.md      | 14 ++++++++------
|  tests/test-cases/module-3-concatenate/TC-CON-001.md   |  9 +++++----
|  tests/test-cases/module-3-concatenate/TC-CON-002.md   |  9 +++++----
|  tests/test-cases/module-3-concatenate/TC-CON-003.md   |  9 +++++----
|  tests/test-cases/module-3-concatenate/TC-CON-004.md   |  9 +++++----
|  tests/test-cases/module-3-concatenate/TC-CON-005.md   |  9 +++++----
|  tests/test-cases/module-3-concatenate/TC-CON-006.md   |  9 +++++----
|  tests/test-cases/module-3-concatenate/TC-CON-007.md   |  9 +++++----
|  tests/test-cases/module-3-concatenate/TC-CON-008.md   |  9 +++++----
|  tests/test-cases/module-3-concatenate/TC-CON-009.md   |  9 +++++----
|  tests/test-cases/module-3-concatenate/TC-CON-010.md   |  9 +++++----
|  tests/test-cases/module-3-concatenate/TC-CON-011.md   |  9 +++++----
|  tests/test-cases/module-3-concatenate/TC-CON-012.md   |  9 +++++----
|  tests/test-cases/module-3-concatenate/TC-CON-013.md   |  9 +++++----
|  tests/test-cases/module-3-concatenate/TC-CON-014.md   |  9 +++++----
|  tests/test-cases/module-3-concatenate/TC-CON-015.md   |  9 +++++----
|  tests/test-cases/module-3-concatenate/TC-CON-016.md   | 11 ++++++-----
|  tests/test-cases/module-3-concatenate/TC-CON-017.md   | 11 ++++++-----
|  tests/test-cases/module-3-concatenate/TC-CON-018.md   | 11 ++++++-----
|  tests/test-cases/module-3-concatenate/TC-CON-019.md   |  9 +++++----
|  tests/test-cases/module-3-concatenate/TC-CON-020.md   |  9 +++++----
|  tests/test-cases/module-3-concatenate/TC-CON-021.md   |  9 +++++----
|  tests/test-cases/module-3-concatenate/TC-CON-022.md   |  9 +++++----
|  .../module-4-formatting-builds/TC-BLD-001.md          | 14 ++++++++------
|  .../module-4-formatting-builds/TC-BLD-002.md          | 16 +++++++++-------
|  .../module-4-formatting-builds/TC-BLD-003.md          | 16 +++++++++-------
|  .../module-4-formatting-builds/TC-BLD-004.md          | 17 ++++++++++-------
|  .../module-4-formatting-builds/TC-BLD-005.md          | 15 +++++++++------
|  .../module-4-formatting-builds/TC-BLD-006.md          | 16 +++++++++-------
|  .../module-4-formatting-builds/TC-BLD-007.md          | 15 +++++++++------
|  .../module-4-formatting-builds/TC-BLD-008.md          | 15 +++++++++------
|  .../module-4-formatting-builds/TC-BLD-009.md          | 14 ++++++++------
|  .../module-4-formatting-builds/TC-FMT-001.md          | 12 ++++++++----
|  .../module-4-formatting-builds/TC-FMT-002.md          | 12 ++++++++----
|  .../module-4-formatting-builds/TC-FMT-003.md          | 12 ++++++++----
|  .../module-4-formatting-builds/TC-FMT-004.md          | 14 +++++++++-----
|  .../module-4-formatting-builds/TC-FMT-005.md          | 12 ++++++++----
|  .../module-4-formatting-builds/TC-FMT-006.md          | 14 +++++++++-----
|  .../module-4-formatting-builds/TC-FMT-007.md          | 14 +++++++++-----
|  69 files changed, 419 insertions(+), 310 deletions(-)
|   
*   commit c3dfc09b9868842dd82cd45da0e3492c4b31e395
|\  Merge: 0edea25 7db8525
| | Author: 23120231 <nhatdat2905@gmail.com>
| | Date:   Mon Sep 28 14:54:34 2026 +0700
| | 
| |     Merge branch 'main' of https://github.com/NgBaoAnn/calculator-test
| | 
| * commit 7db8525b2b520c6e4b19ea760e2840641a9046eb
| | Author: tzin1401 <nguyenlethevinh14@gmail.com>
| | Date:   Mon Sep 28 14:51:32 2026 +0700
| | 
| |     test(module-4): add formatting and build regression cases
| | 
| |  .gitignore                                       |  1 +
| |  .../module-4-formatting-builds/TC-BLD-001.md     | 27 ++++++++++++++++++
| |  .../module-4-formatting-builds/TC-BLD-002.md     | 28 ++++++++++++++++++
| |  .../module-4-formatting-builds/TC-BLD-003.md     | 27 ++++++++++++++++++
| |  .../module-4-formatting-builds/TC-BLD-004.md     | 27 ++++++++++++++++++
| |  .../module-4-formatting-builds/TC-BLD-005.md     | 27 ++++++++++++++++++
| |  .../module-4-formatting-builds/TC-BLD-006.md     | 27 ++++++++++++++++++
| |  .../module-4-formatting-builds/TC-BLD-007.md     | 28 ++++++++++++++++++
| |  .../module-4-formatting-builds/TC-BLD-008.md     | 26 +++++++++++++++++
| |  .../module-4-formatting-builds/TC-BLD-009.md     | 27 ++++++++++++++++++
| |  .../module-4-formatting-builds/TC-FMT-001.md     | 30 +++++++++-----------
| |  .../module-4-formatting-builds/TC-FMT-002.md     | 23 +++++++--------
| |  .../module-4-formatting-builds/TC-FMT-003.md     | 28 ++++++++++++++++++
| |  .../module-4-formatting-builds/TC-FMT-004.md     | 29 +++++++++++++++++++
| |  .../module-4-formatting-builds/TC-FMT-005.md     | 27 ++++++++++++++++++
| |  .../module-4-formatting-builds/TC-FMT-006.md     | 27 ++++++++++++++++++
| |  .../module-4-formatting-builds/TC-FMT-007.md     | 29 +++++++++++++++++++
| |  tests/test-summary/traceability-matrix.md        | 20 +++++++------
| |  18 files changed, 420 insertions(+), 38 deletions(-)
| | 
* | commit 0edea257ed251e4161041260576c8975aca83c3d
|/  Author: 23120231 <nhatdat2905@gmail.com>
|   Date:   Mon Sep 28 14:54:29 2026 +0700
|   
|       hi
|   
|    tests/test-cases/module-2-division/README.md | 41 ------------------------
|    1 file changed, 41 deletions(-)
| 
* commit 67a2da5adbb030845e9685420992c69487903ca6
| Author: Phạm Quang Vinh <vinhp1546@gmail.com>
| Date:   Mon Sep 28 14:45:10 2026 +0700
| 
|     test(module-3): add concatenate and validation test cases
| 
|  .../test-cases/module-3-concatenate/TC-CON-003.md | 31 +++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-004.md | 31 +++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-005.md | 31 +++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-006.md | 31 +++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-007.md | 30 ++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-008.md | 31 +++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-009.md | 31 +++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-010.md | 31 +++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-011.md | 31 +++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-012.md | 31 +++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-013.md | 31 +++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-014.md | 31 +++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-015.md | 30 ++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-016.md | 31 +++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-017.md | 31 +++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-018.md | 31 +++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-019.md | 31 +++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-020.md | 31 +++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-021.md | 31 +++++++++++++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-022.md | 31 +++++++++++++++++++++
|  20 files changed, 618 insertions(+)
|   
*   commit 7498ac16b58847f2d1630a4c3e8b9e9caaf93569
|\  Merge: d81cdcc eb22583
| | Author: 23120231 <nhatdat2905@gmail.com>
| | Date:   Mon Sep 28 14:42:27 2026 +0700
| | 
| |     test: merge expanded arithmetic and division cases
| | 
| * commit eb225830dcc420d6abae4247d76b68e6939c153a
| | Author: NgBaoAnn <baoan1real1@gmail.com>
| | Date:   Mon Sep 28 14:34:40 2026 +0700
| | 
| |     test(module-1): add test cases TC-ARI-003 to TC-ARI-018 and update traceability matrix
| | 
| |  .../test-cases/module-1-arithmetic/TC-ARI-003.md | 31 ++++++++++++++++++++
| |  .../test-cases/module-1-arithmetic/TC-ARI-004.md | 31 ++++++++++++++++++++
| |  .../test-cases/module-1-arithmetic/TC-ARI-005.md | 31 ++++++++++++++++++++
| |  .../test-cases/module-1-arithmetic/TC-ARI-006.md | 31 ++++++++++++++++++++
| |  .../test-cases/module-1-arithmetic/TC-ARI-007.md | 31 ++++++++++++++++++++
| |  .../test-cases/module-1-arithmetic/TC-ARI-008.md | 31 ++++++++++++++++++++
| |  .../test-cases/module-1-arithmetic/TC-ARI-009.md | 31 ++++++++++++++++++++
| |  .../test-cases/module-1-arithmetic/TC-ARI-010.md | 31 ++++++++++++++++++++
| |  .../test-cases/module-1-arithmetic/TC-ARI-011.md | 31 ++++++++++++++++++++
| |  .../test-cases/module-1-arithmetic/TC-ARI-012.md | 31 ++++++++++++++++++++
| |  .../test-cases/module-1-arithmetic/TC-ARI-013.md | 31 ++++++++++++++++++++
| |  .../test-cases/module-1-arithmetic/TC-ARI-014.md | 31 ++++++++++++++++++++
| |  .../test-cases/module-1-arithmetic/TC-ARI-015.md | 31 ++++++++++++++++++++
| |  .../test-cases/module-1-arithmetic/TC-ARI-016.md | 31 ++++++++++++++++++++
| |  .../test-cases/module-1-arithmetic/TC-ARI-017.md | 31 ++++++++++++++++++++
| |  .../test-cases/module-1-arithmetic/TC-ARI-018.md | 31 ++++++++++++++++++++
| |  tests/test-summary/traceability-matrix.md        |  4 +--
| |  17 files changed, 498 insertions(+), 2 deletions(-)
| | 
* | commit d81cdcc4f0aba3f83892dce04e9822927455be7d
|/  Author: 23120231 <nhatdat2905@gmail.com>
|   Date:   Mon Sep 28 14:33:06 2026 +0700
|   
|       test(module-2-division): add comprehensive test cases for division functionality
|   
|    tests/test-cases/module-2-division/README.md     | 41 ++++++++++++++++++++
|    tests/test-cases/module-2-division/TC-DIV-003.md | 29 ++++++++++++++
|    tests/test-cases/module-2-division/TC-DIV-004.md | 28 +++++++++++++
|    tests/test-cases/module-2-division/TC-DIV-005.md | 28 +++++++++++++
|    tests/test-cases/module-2-division/TC-DIV-006.md | 31 +++++++++++++++
|    tests/test-cases/module-2-division/TC-DIV-007.md | 28 +++++++++++++
|    tests/test-cases/module-2-division/TC-DIV-008.md | 28 +++++++++++++
|    tests/test-cases/module-2-division/TC-DIV-009.md | 28 +++++++++++++
|    tests/test-cases/module-2-division/TC-DIV-010.md | 28 +++++++++++++
|    tests/test-cases/module-2-division/TC-DIV-011.md | 27 +++++++++++++
|    tests/test-cases/module-2-division/TC-DIV-012.md | 28 +++++++++++++
|    tests/test-cases/module-2-division/TC-DIV-013.md | 28 +++++++++++++
|    tests/test-summary/traceability-matrix.md        |  4 +-
|    13 files changed, 354 insertions(+), 2 deletions(-)
| 
* commit 0a0e6dad7f2c8ae29d058ad408bcd041287ef99f
| Author: NgBaoAnn <baoan1real1@gmail.com>
| Date:   Mon Sep 28 14:20:55 2026 +0700
| 
|     refactor(tests): organize test cases into 4 calculator modules with standardized template
| 
|  tests/test-cases/checkout/TC-CHECKOUT-001.md      | 32 ----------
|  tests/test-cases/login/TC-LOGIN-001.md            | 26 --------
|  tests/test-cases/login/TC-LOGIN-002.md            | 26 --------
|  .../test-cases/module-1-arithmetic/TC-ARI-001.md  | 31 ++++++++++
|  .../test-cases/module-1-arithmetic/TC-ARI-002.md  | 31 ++++++++++
|  tests/test-cases/module-2-division/TC-DIV-001.md  | 31 ++++++++++
|  tests/test-cases/module-2-division/TC-DIV-002.md  | 31 ++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-001.md | 31 ++++++++++
|  .../test-cases/module-3-concatenate/TC-CON-002.md | 31 ++++++++++
|  .../module-4-formatting-builds/TC-FMT-001.md      | 33 ++++++++++
|  .../module-4-formatting-builds/TC-FMT-002.md      | 28 +++++++++
|  tests/test-cases/register/TC-REG-001.md           | 28 ---------
|  tests/test-runs/sprint-1-test-run.md              | 62 +++++++------------
|  tests/test-runs/sprint-2-regression.md            | 67 ++++++---------------
|  tests/test-summary/traceability-matrix.md         | 47 +++++----------
|  15 files changed, 303 insertions(+), 232 deletions(-)
| 
* commit f296dabbc7812148ec7caf98562cc24f4839d6a3
| Author: NgBaoAnn <baoan1real1@gmail.com>
| Date:   Mon Sep 28 14:18:08 2026 +0700
| 
|     test: add skeleton test cases, test runs, traceability matrix, and issue templates
| 
|  .github/ISSUE_TEMPLATE/bug_report.md         | 44 +++++++++++++++++
|  .github/ISSUE_TEMPLATE/test_case_template.md | 34 +++++++++++++
|  src/.gitkeep                                 |  2 +
|  tests/test-cases/checkout/TC-CHECKOUT-001.md | 32 ++++++++++++
|  tests/test-cases/login/TC-LOGIN-001.md       | 26 ++++++++++
|  tests/test-cases/login/TC-LOGIN-002.md       | 26 ++++++++++
|  tests/test-cases/register/TC-REG-001.md      | 28 +++++++++++
|  tests/test-runs/sprint-1-test-run.md         | 68 ++++++++++++++++++++++++++
|  tests/test-runs/sprint-2-regression.md       | 64 ++++++++++++++++++++++++
|  tests/test-summary/traceability-matrix.md    | 47 ++++++++++++++++++
|  10 files changed, 371 insertions(+)
| 
* commit a96c3c34139a3a925fc77170f62e3e58411af403
| Author: NgBaoAnn <baoan1real1@gmail.com>
| Date:   Mon Sep 28 14:09:03 2026 +0700
| 
|     docs: remove detailed test case design document
| 
|  docs/02_thiet_ke_test_cases.md | 101 ---------------------------------------
|  1 file changed, 101 deletions(-)
| 
* commit 7f0b4b87f45613db699d3a99f44d46c3dffa856a
| Author: NgBaoAnn <baoan1real1@gmail.com>
| Date:   Mon Sep 28 14:07:59 2026 +0700
| 
|     docs: add test planning, module breakdown and detailed test cases
| 
|  README.md                      |  43 +++++++++++++-
|  docs/01_phan_chia_module.md    | 123 +++++++++++++++++++++++++++++++++++++++
|  docs/02_thiet_ke_test_cases.md | 101 ++++++++++++++++++++++++++++++++
|  3 files changed, 266 insertions(+), 1 deletion(-)
| 
* commit dba658deefa94ab8b312af52c35528198f964014
  Author: NgBaoAnn <baoan1real1@gmail.com>
  Date:   Mon Sep 28 13:59:17 2026 +0700
  
      Initial commit
  
   README.md | 1 +
   1 file changed, 1 insertion(+)
