import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTodosFetch } from "../module/api";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
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
  }, []);

  return <div>todoList</div>;
};

export default TodoList;
