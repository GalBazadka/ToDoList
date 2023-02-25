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
          color: "#68B0AB",
          height: "6rem",
          width: "6rem",
          position: "absolute",
          bottom: "5rem",
        }}
        onClick={OpenNewTask}
      />
    </AddIcon>
  );
};
export default AddTodo;

const AddIcon = styled.form`
  position: absolute;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
