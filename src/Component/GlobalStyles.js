import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const globalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
    }
    a{
        text-decoration:none;
        color: inherit;
    }
    input:focus{
    outline:none;
  }
  html,body{ 
      margin:0; 
      padding:0;
      width:100%; 
      height:100%;
      font-family:'Noto Sans CJK KR';
      }

  
`;
export default globalStyles;