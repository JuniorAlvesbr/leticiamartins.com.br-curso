import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Autography";
        font-style: normal;
        font-weight: 400;
        src: url("/fonts/Autography.otf");
        font-display: swap;
    }

    html, body {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }
`;

export default GlobalStyles;