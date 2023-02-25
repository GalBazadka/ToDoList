import styled from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";

const AddTodo = () => {
  const OpenNewTask = () => {
    document.getElementById("newTask").style.display = "block";
    document.getElementById("AddButton").style.display = "block";
    document.getElementById("List").style.marginTop = "0rem";
  };

  return (
    <AddIcon>
      <AiFillPlusCircle
        style={{
          height: "5rem",
          width: "5rem",
        }}
        onClick={OpenNewTask}
      />
    </AddIcon>
  );
};
export default AddTodo;

const AddIcon = styled.form`
  display: flex;
  justify-content: center;
  color: #68b0ab;
  color: #F0997D;
  color: #ffffff;
  opacity: 0.8;

`;
