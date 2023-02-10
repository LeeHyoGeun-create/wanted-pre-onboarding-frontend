import React from "react";
import * as Styled from "./styled/TodoCard.styled";
import { deleteTodosFetch, updateTodosFetch } from "../module/api";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const ViewCardBody = ({
  id,
  todoValue,
  setEditMode,
  isCompleted,
  setChange,
}) => {
  const onDeleteClick = async () => {
    await deleteTodosFetch(id);
    setChange((prev) => !prev);
  };

  const onEditClick = () => {
    setEditMode(true);
  };

  const onDoneClick = async () => {
    await updateTodosFetch(id, !isCompleted, todoValue);
    setChange((prev) => !prev);
  };

  return (
    <Styled.StyledCardBody>
      <h2>{todoValue}</h2>
      <Styled.StyledFlex>
        <div>
          <input
            type="checkbox"
            name="isCompleted"
            onChange={onDoneClick}
            checked={isCompleted}
          />
          <button onClick={onEditClick} data-testid="modify-button">
            <AiOutlineEdit />
          </button>
          <button data-testid="delete-button" onClick={() => onDeleteClick()}>
            <AiOutlineDelete />
          </button>
        </div>
      </Styled.StyledFlex>
    </Styled.StyledCardBody>
  );
};

export default ViewCardBody;
