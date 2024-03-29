# reusable-react

Martian 팀의 React 프로젝트에 재활용 가능한 컴포넌트 및 유틸리티들을 모아둔 라이브러리 입니다.

## Table of Contents

- [Getting Started](#getting-started)
  - [프로젝트 생성](#프로젝트-생성)
  - [Tailwind CSS 세팅](#tailwind-css-세팅)
  - [vscode 세팅](#vscode-세팅)
  - [reusable-react 세팅](#reusable-react-세팅)
- [Authentication](#authentication)
  - [useSignup](#usesignup)
  - [useLogin](#uselogin)
  - [useLogout](#uselogout)
  - [AuthRoute](#authroute)
  - [useAuth](#useauth)
- [Components](#components)
  - [TopNavbar](#topnavbar)
  - [BottomNavbar](#bottomnavbar)
  - [Screen](#screen)
  - [Section](#section)
  - [Button](#button)
  - [BottomFixedButton](#bottomfixedbutton)
  - [List](#list)
- [Hooks](#hooks)
  - [useIdParam](#useidparam)
  - [useQueryParams](#usequeryparams)

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
  "singleQuote": true,
  "trailingComma": "all"
}
```

5. 프로젝트 루트 경로에 .env 와 .env.example 파일을 생성하고 다음 내용으로 채워준다.

```
REACT_APP_API_URL=http://localhost:8000
```

6. `.gitignore` 파일에 다음 내용을 추가한다.

```
.env
.eslintcache
```

### [Tailwind CSS](https://tailwindcss.com) 세팅

1. 아래 명령어를 입력하여 필요한 패키지들을 설치한다.

```
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
npm install @craco/craco
```

zsh 에서는 `zsh: no matches found: postcss@^7` 라는 에러가 나는데 아래 처럼 따옴표로 감싸주면 된다.

```
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat "postcss@^7" "autoprefixer@^9"
npm install @craco/craco
```

2. `package.json` 파일의 `scripts` 부분을 아래 내용으로 교체한다.

```
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "react-scripts eject"
},
```

3. 프로젝트 루트 경로에 `craco.config.js` 파일을 생성하고 아래 내용을 입력한다.

```
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

4. 아래 명령어를 입력하여 `tailwind.config.js` 파일을 생성한다.

```
npx tailwindcss init
```

5. `src` 폴더 안에 `index.css` 파일을 생성하고 아래 내용을 입력한다.

```
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. `src/index.tsx` 파일에 다음 내용을 추가한다.

```
import './index.css';
```

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

1. GitHub [Settings](https://github.com/settings/profile) > [Developer settings](https://github.com/settings/apps) > [Personal access tokens](https://github.com/settings/tokens) 에서 Generate new token 버튼을 눌러 토큰을 생성한다. 토큰을 생성할 때 `write:packages` 체크박스를 선택한다. 생성된 토큰을 클립보드에 복사한다.

2. `~/.npmrc` 파일에 다음 내용을 추가한다. `TOKEN` 자리에 복사한 토큰을 넣는다.

```
//npm.pkg.github.com/:_authToken=TOKEN
```

3. 다음 명령어를 입력하여 로그인한다. 로그인할때 패스워드는 복사한 토큰을 그대로 사용한다.

```
npm login --scope=@entropyparadox --registry=https://npm.pkg.github.com
```

4. 다음 명령어를 이용하여 패키지를 설치한다.

```
npm i @entropyparadox/reusable-react
```

5. tailwind.config.js 를 다음과 같이 변경한다.

```
const { reusableTailwindPreset } = require('@entropyparadox/reusable-react');

module.exports = {
  presets: [reusableTailwindPreset],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-1': '#000000',
        'brand-2': '#EA5519',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

커스텀 설정을 추가할 때 theme 바로 밑에 추가하면 디폴트 설정을 replace 하게 되므로 theme.extend 아래에 추가해야 합니다.

6. `src/index.tsx` 파일에서 `App` 을 `ReusableProvider` 로 감싼다.

```
import { ReusableProvider } from '@entropyparadox/reusable-react';

ReactDOM.render(
  <React.StrictMode>
    <ReusableProvider>
      <App />
    </ReusableProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
```

## Authentication

### useSignup

회원가입

```
import { Button, useSignup } from '@entropyparadox/reusable-react';

function SinUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const signup = useSignup({ email, password, name });

  return (
    <Button
      text="회원가입"
      disabled={!email || !password || !name}
      onClick={() => signup()}
    />
  );
}
```

### useLogin

로그인

```
import { Button, useLogin } from '@entropyparadox/reusable-react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin(email, password);

  return (
    <Button
      text="로그인"
      disabled={!email || !password}
      onClick={() => login()}
    />
  );
}
```

### useLogout

로그아웃

```
import { List, SimpleListItem, useLogout } from '@entropyparadox/reusable-react';

function MyPage() {
  const logout = useLogout();

  return (
    <List>
      <SimpleListItem text="로그아웃" onClick={() => logout()} />
    </List>
  );
}
```

### AuthRoute

`react-router-dom` 패키지의 `Route` 컴포넌트를 확장한 authentication aware 컴포넌트

```
import { AuthRoute } from '@entropyparadox/reusable-react';
import React from 'react';
import { LoginPage } from './pages/LoginPage';
import { MyPage } from './pages/MyPage';
import { SignupPage } from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/login" component={LoginPage} guestOnly />
        <AuthRoute path="/signup" component={SignupPage} guestOnly />
        <AuthRoute path="/mypage" component={MyPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
```

- `<Route path="/" component={HomePage} />` - 아무 제한 없이 모두 접근 가능한 페이지
- `<AuthRoute path="/mypage" component={MyPage} />` - 로그인한 사용자만 접근 가능한 페이지. 게스트가 접근하려고 하면 `"/login"` 경로로 redirect 된다.
- `<AuthRoute path="/login" component={LoginPage} guestOnly />` - 게스트만 접근 가능한 페이지. 로그인한 유저가 접근하려고 하면 `"/"` 경로로 redirect 된다.

### useAuth

로그인했는지 확인할 수 있다.

```
import { useAuth } from '@entropyparadox/reusable-react';

function GreetingsPage() {
  const { authenticated } = useAuth();

  return (
    <>
      <h1>{authenticated ? '환영합니다' : '로그인이 필요합니다'}</h1>
    </>
  );
}
```

## Components

### TopNavbar

### BottomNavbar

### Screen

### Section

### Button

### BottomFixedButton

### List

## Hooks

### useIdParam

Get `id` from url param `/posts/:id`

```
import { useIdParam } from '@entropyparadox/reusable-react';

functions PostPage() {
  const id = useIdParam();
  const post = getPostById(id);

  if (!id) return <NotFoundPage />;
  return (
    <h1>{post.title}</h1>
    <p>{post.text}</p>
  );
}
```

### useQueryParams

Get `ids` from url query `/tag-search?ids=1,3,5`

```
import { useQueryParams } from '@entropyparadox/reusable-react';

function TagSearchPage() {
  const { ids } = useQueryParams(); // [1, 3, 5]
  const tags = getTagsByIds(ids);

  return (
    {tags.map((tag) => (
      <Chip key={tag.id} text={tag.name} />
    ))}
  );
}
```

### useAuth
