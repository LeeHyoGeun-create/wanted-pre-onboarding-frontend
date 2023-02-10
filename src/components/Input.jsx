import React, { useState } from "react";
import { createTodoFetch } from "../module/api";
import { StyledInputWrrap } from "./styled/Input.styled";

const Input = ({ setChange }) => {
  const [todo, setToDo] = useState("");

  const onPostValue = async () => {
    await createTodoFetch(todo);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  const onClick = async () => {
    await onPostValue();
    setToDo("");
    setChange((prev) => !prev);
  };

  const onInputChange = async (e) => {
    setToDo(e.target.value);
  };

  return (
    <StyledInputWrrap>
      <form onSubmit={onSubmit}>
        <input
          data-testid="new-todo-input"
          type="text"
          name="todo"
          maxLength={30}
          value={todo}
          onChange={onInputChange}
        />
      </form>
      <button type="submit" data-testid="new-todo-add-button" onClick={onClick}>
        추가
      </button>
    </StyledInputWrrap>
  );
};

export default Input;
