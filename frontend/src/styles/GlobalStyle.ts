import { createGlobalStyle } from 'styled-components';
import { ResetStyle } from './ResetStyle';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'KyoboHand';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/KyoboHand.woff') format('woff');
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
    --gray-800: #282828;
    --gray-700: #5e5e5e;
    --gray-500: #a6a6a6;
    --gray-600: #727272;
    --gray-300: #dddddd;
    --gray-400: #bbbbbb;
    --gray-100: #f3f3f3;
    --gray-200: #e8e8e8;
    --white-color: #ffffff;
}

/*font*/
html,textarea {
  font-family: KyoboHand;
}

#root {
    width: 100%;
    height: 100%;
  }

  button{
    cursor: pointer;
  }
`;
