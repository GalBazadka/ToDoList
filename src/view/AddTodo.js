import styled from "styled-components";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../state/toDoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const content = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const handleChange = () => {
    // setState(content.current.value);
    const hasTxt = !!content.current.value.length;
    setDisabled(!hasTxt);
  };

  const add = () => {
    console.log("addd");
    if (content.current) {
      dispatch(addTodo({ newContent: content.current.value }));
      content.current.value = " ";
    }
  };

  return (
    <Form onSubmit={add}>  
      <input
        type="text"
        ref={content}
        placeholder=" Your next task"
        onChange={handleChange}
      ></input>
      <button disabled = {disabled}>Add</button>
    </Form>
  );
};
export default AddTodo;

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
  align-items: center;

  input {
    border-radius: 5px;
    border: 3px solid #5f8d4e;
    font-family: "Griffy", cursive;
    min-width: 30vw;
    line-height: 4rem;
    font-size: 1.5rem;
    font-weight: 300;
    :active {
      border: 3px solid #e5d9b6;
    }
    ::placeholder {
      color: #5f8d4e;
      text-align: center;
    }
  }

  button {
    border-radius: 5px;
    background-color: #5f8d4e;
    width: 4.5rem;
    height: 4.5rem;
    font-family: "Griffy", cursive;
    font-size: 1.3rem;
    color: #ffffff;
    font-weight: 500;
    cursor: pointer;
    :hover {
      background: #a4be7b;
      color: #e5d9b6;
    }
  }
`;
