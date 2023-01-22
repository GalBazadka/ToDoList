import styled from "styled-components";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../Reducers/toDoSlider';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [ state, setState ] = useState({
     content: '',
     contentError: null
  });  
  const handleChange = (e) =>{
    setState({...state, 
          [e.target.name]: e.target.value,
          [`${e.target.name}Error`]: null });
  }  
  const add = () =>{
    if(content === ''){
      setState({...state, 
         contentError: 'You must write something!'});
       return;
    }
    dispatch(addToDo({newContent: content}));
    setState({...state, content: ''});
  }
  const { content, contentError } = state; 
  
  return <Form>
      <input type='text' value={content} 
        name='content' 
        placeholder = " Your next task"
        onChange={handleChange}>
      </input>
      <button type='button' className='button' 
        onClick={add}>Add
      </button>
      {contentError ? 
         <Error>{contentError}</Error>: null}
    </Form>;
};

export default AddTodo;

const Form = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
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

const Error = styled.div`
  font-family: "Griffy", cursive;
  font-size: 1.2rem;
  position: relative;
  left: -7rem;
  top: 3rem;
  width: 100%;
`;
