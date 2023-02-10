import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("JWT")) {
      navigate("/signin", { replace: true });
    }
  }, [navigate]);

  return <div>todoList</div>;
};

export default TodoList;
