import styled from "styled-components";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../state/toDoSlice";
import { useState } from "react";

const AddTodo = () => {
  const dispatch = useDispatch();
  const content = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const handleChange = () => {
    const hasTxt = !!content.current.value.length;
    setDisabled(!hasTxt);
  };

  const add = (evt) => {
    evt.preventDefault();
    console.log("addd");
    if (content.current) {
      dispatch(addTodo({ newContent: content.current.value }));
      content.current.value = " ";
    }
  };

  return (
    <div>
      <Form onSubmit={add}>
        <input
          id="newTask"
          style={{ display: "none" }}
          type="text"
          ref={content}
          placeholder=" Your next task"
          onChange={handleChange}
        ></input>
        <button id="AddButton" style={{ display: "none" }} disabled={disabled}>
          Add
        </button>
      </Form>
    </div>
  );
};
export default AddTodo;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    margin-right: 0.3rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    background: #FFC3A1;
    width: 55%;
    line-height: 4rem;
    border: 3px solid;
    border-radius: 5px;
    font-family: "Shantell Sans", cursive;
    font-size: 1rem;
    color: white;
    :active {
      border: 3px solid;
    }
    ::placeholder {
      color: #ffffff;
      text-align: center;
    }
  }

  button {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    background: #FFC3A1;
    width: 17%;
    max-width: 15vh;
    line-height: 4rem;
    border: 3px solid;
    border-radius: 5px;
    font-family: "Shantell Sans", cursive;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    :hover {
      background: white;
      color: black;
    }
  }
`;
