import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Autography";
        src: url("/fonts/Autography.otf");
    }

    html, body {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }
`;

export default GlobalStyles;