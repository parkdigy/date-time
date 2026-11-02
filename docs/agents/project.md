# 프로젝트 구조와 개발 참고

2026-11-02 기준 소스와 설정을 분석했다. 실제 코드와 설정이 우선이다.

`@pdg/date-time`은 `dayjs` 기반 TypeScript 날짜·시간 유틸리티 npm 패키지다. 서버나 UI는 없다. `src/index.ts`는 named export와 별칭을 가진 default 객체를 제공한다. `dayjs`는 peer dependency이자 개발 의존성이다.

## 주요 경로

- `src/`: 일·월 경계, 날짜 분해·포맷, 현재 시각, 숫자형 날짜와 한글 요일 함수. `src/index.ts`가 공개 진입점이다.
- `test/`: Jest와 ts-jest를 사용하는 Node 환경 테스트. 현재 일·월 경계와 `formatDate` 일부만 검증한다.
- `examples/`: 별도 npm 프로젝트. `src/example.ts`는 `../../src`의 default 객체를 직접 사용한다. 설치된 패키지의 소비 테스트는 아니다.
- `dist/`: Rollup 번들과 TypeScript 선언 생성물. Git 추적 대상이며 직접 편집하지 않는다.
- `package.json`, `rollup.config.js`, `tsconfig.json`: 배포 진입점과 번들·타입 설정. `tsconfig.test.json`, `jest.config.ts`는 테스트 설정이다.
- `.nvmrc`: Node `24.22.1`. 잠금 파일은 `.gitignore` 대상이다.

## API 변경 시 확인

- named export와 default 객체를 함께 확인한다. 예를 들어 named export `beginDateOfDay`는 default 객체에서 `beginOfDay`로 제공된다.
- 일·월 경계 함수는 `Date`, 문자열 또는 인수 생략 시 `Date`를, `Dayjs` 입력 시 `Dayjs`를 반환한다. 숫자 월 인수와 `extractDate`의 월은 1부터 시작하고 요일은 0부터 시작한다.
- 날짜 처리는 기본적으로 로컬 시간에 따른다. 현재 시각을 참조하는 테스트는 날짜나 초 경계에서 흔들릴 수 있다. 변경에 맞춰 고정 시각, 월말, 윤년, 시간대를 검토한다.
- 일부 함수는 문자열과 `format`을 `dayjs`에 전달하지만 소스에 파싱 플러그인 등록은 없다. 임의 형식의 파싱이나 엄격한 유효성 검사를 가정하지 말고 실제 동작을 확인한다.
- `formatDate`는 `null`과 `undefined`를 그대로 반환하고, `weekdayText`는 범위 밖 숫자에 빈 문자열을 반환한다.

## 빌드와 검증

`npm run tsc`는 `src/`만 타입 검사하고 `npm run lint`도 `src/**/*.ts`만 검사한다. 테스트와 예제는 별도 확인한다. `npm test -- --runInBand --watchman=false`는 Watchman 없이 Jest를 실행한다.

`npm run build`는 Watchman 감시 재등록, 기본 Jest 실행, Rollup 순서다. Watchman이 없거나 접근 오류가 있으면 위 테스트와 `./node_modules/.bin/rollup -c --bundleConfigAsCjs`를 각각 실행하고 대체 검증으로 보고한다. Rollup은 `dist/*`를 지우고 생성하므로 기존 변경을 먼저 확인한다. 예제는 `examples/` 의존성을 별도 설치한 뒤 루트에서 `npm run dev`로 실행한다.

## 배포·설정 변경 시 확인

- Rollup은 `dist/index.js`에 CommonJS, `dist/index.esm.js`에 ES module을 출력하고 선언을 `dist/`에 생성한다. 패키지가 `"type": "module"`이므로 `.js`인 CommonJS 진입점의 Node `require` 호환성을 보장할 수 없다. 실제 패키지를 설치한 소비 환경에서 `import`, `require`, 타입 해석을 확인한다.
- 의존성과 peer dependency는 외부로 처리한다. 소비자의 `dayjs` 설치 및 타입 해석을 확인한다.
- Rollup 플러그인은 `.private` 디렉터리와 `.private.d.ts` 파일을 제거한다. 공개 선언이 삭제된 타입을 참조하지 않는지 확인한다.
- `npm pack --dry-run`으로 배포 파일을 확인한다. `files`에는 `dist`와 `README.md`가 지정돼 있다.
- `npm run pub`는 실제 게시를 수행하며 마지막 `|| true` 때문에 종료 코드만으로 게시 성공을 판단할 수 없다. `git:commit`, `reset:gitignore`, `reinstall:module`은 각각 스테이징 또는 파일 삭제를 수반하므로 일반 검증에 사용하지 않는다.
