import GlobalStyle from "./components/styled/global.styled";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const theme = {};

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
