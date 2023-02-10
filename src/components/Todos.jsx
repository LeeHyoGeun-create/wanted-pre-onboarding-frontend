import React from 'react';
import TodoCard from './TodoCard';
import StyledTodos from './styled/Todos.styled';

const Todos = ({ data, setChange }) => {
  return (
    <StyledTodos>
      {data.map(todoObj => (
        <TodoCard key={todoObj.id} {...todoObj} setChange={setChange} />
      ))}
    </StyledTodos>
  );
};

export default Todos;
