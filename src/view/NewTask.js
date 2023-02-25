import styled from "styled-components";
import { filterTodos } from "../state/toDoSlice";
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const dispatch = useDispatch();

  const OpenNewTask = () => {
    document.getElementById("newTask").style.display = "block";
    document.getElementById("AddButton").style.display = "block";
    document.getElementById("List").style.marginTop = "0rem";
  };

  return (
    <Div>
      <AddIcon>
        <AiFillPlusCircle
          style={{
            height: "6rem",
            width: "6rem",
          }}
          onClick={OpenNewTask}
        />
      </AddIcon>
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
    </Div>
  );
};
export default AddTodo;

const Div = styled.form`
  position: absolute;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const AddIcon = styled.form`
  display: flex;
  justify-content: center;
  color: #68B0AB;
  
`;

const Filter = styled.div`
  display: flex;
  justify-content: center;
  button {
    border-radius: 5px;
    background-color: #68b0ab;
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
