import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { addToDo } from "../Reducers/toDoSlider";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    content: "",
    contentError: null,
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  };
  const add = () => {
    if (content === "") {
      setState({ ...state, contentError: "You must write something!" });
      return;
    }
    dispatch(addToDo({ newContent: content }));
    setState({ ...state, content: "" });
  };
  const { content, contentError } = state;

  return (
    <Form>
      <input
        type="text"
        value={content}
        name="content"
        placeholder=" Your next task"
        onChange={handleChange}
      ></input>
      <button type="button" className="button" onClick={add}>
        Add
      </button>
      {contentError ? 
      <Error>{contentError}
      </Error> : null}
    </Form>
  );
};
export default AddTodo;

const Form = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
  input {
    border: 5px outset #CCD6A6;
    font-family: "Griffy", cursive;
    min-width: 30vw;
    line-height: 2.5rem;
    font-size: 1.5rem;
    font-weight: 300;
  }
  button {
    background-color: #F4EAD5;
    border: 5px outset #CCD6A6;
    min-width: 5vw;
    font-family: "Griffy", cursive;
    font-size: 1.5rem;
    color: #FFFFFF;
    font-weight: 500;
    cursor: pointer;
    :hover {
      background: #DAE2B6;
      color: #FFFBE9;
    }
  }
`;

const Error = styled.div`

    font-family: "Griffy", cursive;
    font-size: 1.5rem;

      position: relative;
  left: -30rem;
  top: 4rem;

`;
