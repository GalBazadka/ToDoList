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
        All{" "}
      </button>
      <button
        id="filterActive"
        onClick={() => dispatch(filterTodos({ currentFilter: "Active" }))}
      >
        Active{" "}
      </button>
      <button
        id="filterCompleted"
        onClick={() => dispatch(filterTodos({ currentFilter: "Completed" }))}
      >
        Completed{" "}
      </button>
    </Filter>
  );
};
export default AddTodo;

const Filter = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10px;
  display: flex;
  justify-content: center;
  button {
    border-radius: 5px;
    background-color: #68b0ab;
    background: #FFC3A1;

    opacity: 0.8;
    line-height: 2.5rem;
    font-size: 0.9rem;
    color: black;
    width: 6.5rem;
    text-align: center;
    margin: 0.1rem;
    cursor: pointer;
    :hover {
      color: #ffffff;
    }
  }
`;
