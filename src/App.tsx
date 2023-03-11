import { DefaultTheme, ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"

import { colors } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
