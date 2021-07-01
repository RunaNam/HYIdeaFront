import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color: inherit;
    }
    *{
        padding: 0;
        margin: 0;
    }
    body{
        box-sizing: border-box;
        font-family:'Noto Sans CJK KR';
    }
`;
export default globalStyles;