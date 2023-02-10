import GlobalStyle from "./components/styled/global.styled";
import { HashRouter, Routes, Route } from "react-router-dom";
import TodoList from "./pages/TodoList";
import SigninForm from "./pages/SigninForm";
import SignupForm from "./pages/SignupForm";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/signin" element={<SigninForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
