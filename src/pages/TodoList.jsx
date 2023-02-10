import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTodosFetch } from "../module/api";
import Input from "../components/Input";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [change, setChange] = useState(false);
  const navigate = useNavigate();

  const getTodos = async () => {
    const value = await getTodosFetch();
    setTodos(value);
  };

  useEffect(() => {
    if (!localStorage.getItem("JWT")) {
      navigate("/signin", { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    getTodos();
  }, [change]);

  return (
    <main>
      <Input setChange={setChange} />
      <Todos data={todos} setChange={setChange} />
    </main>
  );
};

export default TodoList;
