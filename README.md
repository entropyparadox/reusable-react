# reusable-react

Martian 팀의 React 프로젝트에 재활용 가능한 컴포넌트 및 유틸리티들을 모아둔 라이브러리 입니다.

## Getting Started

### 프로젝트 생성

1. GitHub 에 빈 리포지토리를 생성하고 로컬에 클론 받는다.

2. [Create React App](https://create-react-app.dev) 타입스크립트 템플릿 사용. 프로젝트 루트 경로로 이동하여 다음 명령어를 실행한다.

```
npx create-react-app . --template typescript
```

3. (Optional) [TypeError: Cannot assign to read only property 'jsx' of object](https://github.com/facebook/create-react-app/issues/10110#issuecomment-736849902) 이슈가 발생할 경우 해결방법.

   1. vscode 에서 아무 tsx 파일을 띄워놓고 하단 상태바에 typescript 버전을 클릭. (또는 `Shift + cmd + p` 후에 typescript 입력 )

   2. Select TypeScript Version... 선택

   3. Use Workspace Version 선택

   4. 프로젝트 루트 경로에 .vscode/settings.json 파일이 생성됨

4. 프로젝트 루트 경로에 `.prettierrc` 파일을 생성하고 아래 내용을 입력한다.

```
{
  "singleQuote": true
}
```

5. `.gitignore` 파일에 다음 내용을 추가한다.

```
.eslintcache
```

### [Tailwind CSS](https://tailwindcss.com) 세팅

1. 아래 명령어를 입력하여 필요한 패키지들을 설치한다.

```
npm i tailwindcss postcss postcss-cli autoprefixer npm-run-all
```

`npm-run-all` 은 여러 npm script 명령어를 동시에 병렬로 실행하게 해줍니다.

2. 아래 명령어를 입력하여 `tailwind.config.js` 파일을 생성한다.

```
npx tailwindcss init --full
```

3. 프로젝트 루트 경로에 `postcss.config.js` 파일을 생성하고 아래 내용을 입력한다.

```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

4. `src` 폴더 안에 `tailwind.css` 파일을 생성하고 아래 내용을 입력한다.

```
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. `package.json` 파일의 `scripts` 부분을 아래 내용으로 교체한다.

```
"scripts": {
  "start": "run-p watch:css start:dev",
  "watch:css": "postcss -w src/tailwind.css -o src/tailwind.generated.css",
  "start:dev": "react-scripts start",
  "build": "npm run build:css && react-scripts build",
  "build:css": "postcss src/tailwind.css -o src/tailwind.generated.css",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},
```

6. `.gitignore` 파일에 다음 내용을 추가한다.

```
tailwind.generated.css
```

7. `src/index.tsx` 파일에 다음 내용을 추가한다.

```
import './tailwind.generated.css';
```

기존의 `index.css` 파일은 삭제해줍니다.

### vscode 세팅

1. 이미 설치되어 있지 않은 경우 다음 vscode extensions 를 설치한다.

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

2. `cmd + ,` 를 입력하여 Settings 를 다음과 같이 설정한다.

```
"editor.tabSize": 2,
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
```

### reusable-react 세팅

1. 다음 명령어를 이용하여 패키지를 설치한다.

```
npm i @entropyparadox/reusable-react
```

2. tailwind.config.js 에 다음 항목들을 추가한다.

```
theme: {
  colors: {
    // 해당 프로젝트의 브랜드 컬러
    'brand-1': '#133132',
    'brand-2': '#d1ab83',
  },
  spacing: {
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    full: '100%',
    // 해당 프로젝트의 TopNavbar 또는 BottomNavbar 컴포넌트 사이즈
    'fixed-top': '2.75rem',
    'fixed-bottom': '3rem',
  }
},
variants: {
  backgroundColor: [
    // ...
    'disabled',
  ]
}
```

3. `src/tailwind.css` 파일에 다음 내용을 추가한다.

```
@layer base {
  body {
    @apply mb-fixed-bottom;
  }
  button {
    @apply focus:outline-none;
  }
  input {
    @apply focus:outline-none;
  }
  textarea {
    @apply focus:outline-none;
  }
}
```