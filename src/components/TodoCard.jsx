import React, { useState } from "react";
import * as Styled from "./styled/TodoCard.styled";

import EditCardBody from "./EditCardBody";
import ViewCardBody from "./ViewCardBody";

const TodoCard = ({ id, todo, isCompleted, setChange }) => {
  const [editMode, setEditMode] = useState(false);
  const colors = [
    "#B9F3E4",
    "#EA8FEA",
    "#FFAACF",
    "#F6E6C2",
    "#FDFDBD",
    "#C8FFD4",
    "#B8E8FC",
    "#B1AFFF",
    "#B5D5C5",
  ];

  return (
    <Styled.StyledTodoCard isCompleted={isCompleted}>
      <Styled.StyledCardHeader
        color={colors[Math.floor(Math.random() * colors.length)]}
      >
        <div></div>
      </Styled.StyledCardHeader>
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
