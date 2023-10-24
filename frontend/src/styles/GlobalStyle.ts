import { createGlobalStyle } from 'styled-components';
import { ResetStyle } from './ResetStyle';
import mainFont from '/font/YoonChildfundkoreaManSeh.woff2';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'YoonChildfundkoreaManSeh';
  src: url(${mainFont}) format('woff2');
}

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

:root {
      --font-pretendard: 'Pretendard-Regular';
      --font-manse: 'YoonChildfundkoreaManSeh';
  }

* {
  font-family: var(--font-pretendard), sans-serif;
}

${ResetStyle}

  html
  /* Colors *****************************************/
  :root {
    --base-color: #333333;
    --count-color: #04c09e;
    --border-color: #dddddd;
    
    --black: #000000;
    --gray-50: #f7f7f8;
    --gray-100: #ececf1;
    --gray-200: #d9d9e3;
    --gray-300: #c5c5d2;
    --gray-400: #acacbe;
    --gray-500: #8e8ea0;
    --gray-600: #565869;
    --gray-700: #40414f;
    --gray-800: #343541;
    --gray-900: #202123;
    --gray-950: #050509;
    --white-color: #ffffff;
}

#root {
    width: 100%;
    height: 100%;
  }

  button{
    cursor: pointer;
  }
`;
