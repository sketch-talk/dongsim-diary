import { createGlobalStyle } from 'styled-components';
import { ResetStyle } from './ResetStyle';
import YoonChildfundkoreaManSeh from '../assets/font/YoonChildfundkoreaManSeh.otf';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'YoonChildfundkoreaManSeh';
    src: url(${YoonChildfundkoreaManSeh}) format('font-otf');
}

@font-face {
    font-family: 'pretendard';
    src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css') format('font-woff');
    font-weight: normal;
    font-style: normal;
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

/*font*/
html,textarea {
  font-family: pretendard;
}

#root {
    width: 100%;
    height: 100%;
  }

  button{
    cursor: pointer;
  }
`;
