// import React, { useState } from "react";
import { AiOutlineCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteToDo,
  checkTodo,
  showAll,
  showActive,
  showCompleted,
} from "../state/toDoSlice";
import styled from "styled-components";

const ListTodo = () => {
  const { todoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();

  return (
    <div>
      <Div>
        <div>
          {todoList.map(({ id, content, completed, show }) => {
            return (
              show && (
                <Li key={id} completed={completed}>
                  <IconComplete>
                    <AiFillPlusCircle
                      style={{ color: completed ? "black" : "white" }}
                      onClick={() => dispatch(checkTodo({ id }))}
                    />
                  </IconComplete>
                  <Content>{content}</Content>
                  <span>
                    <Icon>
                      <AiOutlineCloseCircle
                        onClick={() => dispatch(deleteToDo({ id }))}
                      />
                    </Icon>
                  </span>
                </Li>
              )
            );
          })}
        </div>
      </Div>
      <Filter>
        <button name="all" onClick={() => dispatch(showAll())}>All </button>
        <button name="active" onClick={() => dispatch(showActive())}>Active </button>
        <button name="completed" onClick={() => dispatch(showCompleted())}>Completed </button>
      </Filter>
    </div>
  );
};
export default ListTodo;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
  input {
    border-radius: 5px;
    border: 3px solid #5f8d4e;
    font-family: "Griffy", cursive;
    line-height: 2.5rem;
    font-size: 1.5rem;
    text-decoration: underline dotted red;
  }
  button {
    border-radius: 5px;
    background-color: #5f8d4e;
    line-height: 2.5rem;
    font-family: "Griffy", cursive;
    font-size: 1.5rem;
    color: #ffffff;
    cursor: pointer;
    :hover {
      background: #a4be7b;
      color: #e5d9b6;
    }
  }
`;

const Li = styled.li`
  display: flex;
  margin-top: 0.5rem;
  background: #a4be7b;
  line-height: 4rem;
  border-radius: 5px;
  font-family: "Griffy", cursive;
  min-width: 60vw;
  font-size: 1.2rem;
  padding-right: 1rem;
  padding-left: 1rem;
  height: 4rem;
  text-decoration: ${(props) => (props.completed ? `line-through` : `none`)};
`;

const Icon = styled.div`
  cursor: pointer;
  color: white;
  line-height: 4.5rem;
`;

const IconComplete = styled.div`
  cursor: pointer;
  color: white;
  line-height: 4.5rem;
  :active {
    color: black;
  }
`;

const Content = styled.div`
  min-width: 55vw;
  padding-left: 1rem;
`;

const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
  button {
    border-radius: 5px;
    background-color: #ffffff;
    line-height: 2.5rem;
    font-family: "Griffy", cursive;
    font-size: 1rem;
    padding: 0rem 1rem;
    margin: 0.2rem;
    color: #a4be7b;
    cursor: pointer;
    :hover {
      /* background: #a4be7b; */
      border: 3px solid #5f8d4e;
      /* color: #e5d9b6; */
    }
    :active {
      border: 3px solid #5f8d4e;
      /* color: #e5d9b6; */
    }
  }
`;
