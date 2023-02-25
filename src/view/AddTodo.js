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
          style={{ color: "#68B0AB", height: "6rem", width: "6rem" }}
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
    background: #68B0AB;
    line-height: 4rem;
    border: 3px solid ;
    border-radius: 5px;
    font-family: 'Shantell Sans', cursive;
    width: 14rem;
    font-size: 1rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    height:  2%;
    color: white;
    :active {
      border: 3px solid ;
    }
    ::placeholder {
      color: #ffffff;
      text-align: center;
    }
  }

  button {
    margin-top: 0.5rem;
    background: #68B0AB;
    line-height: 4rem;
    border: 3px solid ;
    border-radius: 5px;
    border-left: 0px;
    font-family: 'Shantell Sans', cursive;
    width: 5rem;
    font-size: 1rem;
    height: 2%;
    color: white;
    cursor: pointer;
    :hover {
      background: #FAF3DD;
      color: black;
    }
  }
`;

const AddIcon = styled.form`
  display: flex;
  justify-content: center;
`;
