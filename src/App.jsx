import GlobalStyle from "./components/styled/global.styled";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TodoList from "./pages/TodoList";
import SigninForm from "./pages/SigninForm";
import SignupForm from "./pages/SignupForm";

function App() {
  const [isSignin, setIsSignin] = useState(false);

  const theme = {};

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {isSignin ? (
            <Route element={<TodoList />} />
          ) : (
            <>
              <Route path="/signin" element={<SigninForm />} />
              <Route path="/signup" element={<SignupForm />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
