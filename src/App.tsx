import { ThemeProvider } from "styled-components"
import { Home } from "./pages/home"
import { GlobalStyle } from "./styles/global"

import { colors } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
