import { createGlobalStyle } from "styled-components";
import { colors } from "./themes/default";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 1rem "JetBrains Mono", sans-serif;
    background: ${() => colors.background};
  }
`