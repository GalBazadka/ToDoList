import styled from "styled-components";
import { filterTodos } from "../state/toDoSlice";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const dispatch = useDispatch();

  return (
    <Filter>
      <button
        id="filterAll"
        onClick={() => dispatch(filterTodos({ currentFilter: "All" }))}
      >
        All
      </button>
      <button
        id="filterActive"
        onClick={() => dispatch(filterTodos({ currentFilter: "Active" }))}
      >
        Active
      </button>
      <button
        id="filterCompleted"
        onClick={() => dispatch(filterTodos({ currentFilter: "Completed" }))}
      >
        Completed
      </button>
    </Filter>
  );
};
export default AddTodo;

const Filter = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  button {
    margin: 0.1rem;
    border-radius: 5px;
    background: #ffc3a1;
    opacity: 0.8;
    width: 6.5rem;
    line-height: 2.5rem;
    font-size: 0.9rem;
    text-align: center;
    color: black;
    cursor: pointer;
    :hover {
      color: #ffffff;
    }
  }
`;
