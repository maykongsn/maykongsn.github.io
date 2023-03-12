import { createGlobalStyle } from "styled-components";
import { colors } from "./themes/default";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 500;
    font-size: 1.2em;
    background: ${() => colors.background};

    @media (max-width: 550px) {
      font-size: 16px;
    }
  }
`