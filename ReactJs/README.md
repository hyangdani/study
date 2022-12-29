# README INDEX
+ [Create React App](#CreateReactApp)<br/>
+ [Start React App](#StartReactApp)<br/>
+ [Problems](#Problems)<br/>
+ [README Markdown](#markdownWiki)<br/>

------------------------------------------------------
<a name="CreateReactApp"></a>
# Create React App
## settings
1. node js install
>[https://nodejs.org/ko/](https://nodejs.org/ko/)

2. check node install complete
```
> node -v
  v19.2.0
> npx
```

3. create react app
```
> npx create-react-app react-for-beginners
```

------------------------------------------------------
<a name="StartReactApp"></a>
# Start React App
## start
> cd .....\react-for-beginners
> npm run start
```
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

새로운 크로스 플랫폼 PowerShell 사용 https://aka.ms/pscore6

Compiled successfully!

You can now view react-for-beginners in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://000.000.000.000:3000

Note that the development build is not optimized.
To create a production build, use npm run build. 

webpack compiled successfully
```
------------------------------------------------------
<a name="Problems"></a>
# Problems
### App.js twice render
- 렌더링이 두 번 발생하는 이유는 <strong>React.StrictMode</strong> 때문
- npx create-react-app 으로 생성시 <React.StrictMode><App/></React.StrictMode> 로 자동 설정 되어있음(index.js 에서 이 Wrapper를 제거해주면 컴포넌트가 두번씩 호출되지 않음)
-  React.StrictMode
    + StrictMode는 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구
    + Fragment와 같이 UI를 렌더링하지 않으며, 자손들에 대한 부가적인 검사와 경고를 활성화함
    + Strict 모드는 개발 모드에서만 활성화되기 때문에, 프로덕션 빌드에는 영향이 없음
    + <details>
        <summary>StrictMode는 아래와 같은 부분에서 도움</summary>
        <ul>
          <li>안전하지 않은 생명주기를 사용하는 컴포넌트 발견</li>
          <li>레거시 문자열 ref 사용에 대한 경고</li>
          <li>권장되지 않는 findDOMNode 사용에 대한 경고</li>
          <li>예상치 못한 부작용 검사</li>
          <li>레거시 context API 검사</li>
        </ul>
      </details>

------------------------------------------------------
<a name="markdownWiki"></a>
# README Markdown
>https://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4
