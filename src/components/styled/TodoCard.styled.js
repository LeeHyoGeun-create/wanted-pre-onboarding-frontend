import styled from "styled-components";

export const StyledFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h2 {
    width: 100%;
  }

  button {
    border: none;
    background-color: rgba(0, 0, 0, 0.01);
    border-radius: 5px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin-right: 7px;

    svg {
      width: 20px;
      height: 16px;
    }
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const StyledCardHeader = styled.div`
  div {
    width: 100%;
    height: 200px;
    background-color: ${(props) => props.color};
  }
`;

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  min-height: 100px;

  h2 {
    font-size: 18px;
  }

  input {
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    font-size: 18px;
  }

  input:hover {
    color: rgba(0, 0, 0, 0.1);
  }
`;

export const StyledTodoCard = styled.li`
  margin: 10px;
  background-color: ${(props) => (props.isCompleted ? "#d1d1d1" : "#fff")};
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  flex: 1 0 300px;

  input {
    transform: scale(1.2);
    margin-right: 7px;
    border: none;
    background-color: rgba(0, 0, 0, 0.01);
    border-radius: 5px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }
`;
