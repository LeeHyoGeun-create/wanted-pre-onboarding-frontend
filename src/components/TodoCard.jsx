import React, { useState } from "react";
import * as Styled from "./styled/TodoCard.styled";

import EditCardBody from "./EditCardBody";
import ViewCardBody from "./ViewCardBody";

//https://codepen.io/eyupucmaz/pen/oNbeXOb
const TodoCard = ({ id, todo, isCompleted, setChange }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <Styled.StyledTodoCard isCompleted={isCompleted}>
      <Styled.StyledCardHeader></Styled.StyledCardHeader>
      {editMode ? (
        <EditCardBody
          id={id}
          todoValue={todo}
          setEditMode={setEditMode}
          isCompleted={isCompleted}
          setChange={setChange}
        />
      ) : (
        <ViewCardBody
          id={id}
          todoValue={todo}
          isCompleted={isCompleted}
          setEditMode={setEditMode}
          setChange={setChange}
        />
      )}
    </Styled.StyledTodoCard>
  );
};

export default TodoCard;
