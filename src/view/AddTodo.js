import styled from "styled-components";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../state/toDoSlice";
import { AiFillPlusCircle } from "react-icons/ai";

const AddTodo = () => {
  const dispatch = useDispatch();
  const content = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const handleChange = () => {
    const hasTxt = !!content.current.value.length;
    setDisabled(!hasTxt);
  };

  const OpenNewTask = () => {
    document.getElementById("newTask").style.visibility = "visible";
    document.getElementById("AddButton").style.visibility = "visible";
    document.getElementById("List").style.marginTop = "0rem";
  };

  const add = () => {
    console.log("addd");
    if (content.current) {
      dispatch(addTodo({ newContent: content.current.value }));
      content.current.value = " ";
    }
  };

  return (
    <div>
      <AddIcon>
        <AiFillPlusCircle
          style={{ color: "white", height: "6.5rem", width: "6.5rem" }}
          onClick={OpenNewTask}
        />
      </AddIcon>
      <Form onSubmit={add}>
        <input
          id="newTask"
          style={{ visibility: "hidden" }}
          type="text"
          ref={content}
          placeholder=" Your next task"
          onChange={handleChange}
        ></input>
        <button
        id = "AddButton"
        style={{ visibility: "hidden" }}
        disabled={disabled}>Add</button>
      </Form>
    </div>
  );
};
export default AddTodo;

const Form = styled.form`
display: flex;
  justify-content: center;
  margin-top: 1.2rem;
  align-items: center;

  input {
    margin-top: 0.5rem;
    background: #ffffff;
    line-height: 4rem;
    border: 3px solid white;
    border-radius: 5px;
    font-family: "Griffy", cursive;
    min-width: 40vw;
    font-size: 1.3rem;
    padding-right: 1rem;
    padding-left: 1rem;
    height: 4rem;
    color: black;
    :active {
      border: 3px solid #747d8c;
    }
    ::placeholder {
      color: #747d8c;
      text-align: center;
    }
  }

  button {
    margin-top: 0.5rem;
    border-radius: 5px;
    background-color: #2f3542;
    width: 4.5rem;
    height: 4.5rem;
    font-family: "Griffy", cursive;
    font-size: 1rem;
    color: #ffffff;
    font-weight: 500;
    cursor: pointer;
    :hover {
      background: #57606f;
      color: #ffffff;
    }
  }
`;

const AddIcon = styled.form`
  display: flex;
  justify-content: center;
`;
