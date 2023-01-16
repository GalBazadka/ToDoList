import React, { useState } from "react";
import styled from "styled-components";

import { AiFillEdit, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, editTodo } from "../Reducers/toDoSlider";

const ListTodo = () => {
  const { todoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [state, setState] = useState({
    id: "",
    content: "",
    contentError: null,
  });

  const onEditToggle = (id, content) => {
    setEditing(true);
    setState({ ...state, id, content });
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  };

  const { content, contentError, id } = state;
  const edit = () => {
    if (content === "") {
      setState({ ...state, contentError: "You must write something!" });
      return;
    }
    dispatch(editTodo({ content, id }));
    setEditing(false);
  };

  return (
    <Div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={content}
            name="content"
            onChange={handleChange}
          ></input>
          <button type="button" className="button" onClick={edit}>
            Edit
          </button>
          {contentError ? <div className="error">{contentError}</div> : null}
        </div>
      ) : (
        <Ul>
          {todoList.map(({ id, content }) => {
            return (
              <Li key={id}>
                <span className="content">{content}</span>
                <span className="todo-action">
                  <Icon>
                    <AiOutlineCloseCircle
                      className="close"
                      onClick={() => dispatch(deleteToDo({ id }))}
                    />
                  </Icon>
                  <Icon>
                    <AiFillEdit
                      className="edit"
                      onClick={() => onEditToggle(id, content)}
                    />
                  </Icon>
                </span>
              </Li>
            );
          })}
        </Ul>
      )}
    </Div>
  );
};
export default ListTodo;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  &:hover {
    color: black;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
  input {
    border: 5px outset #ccd6a6;
    font-family: "Griffy", cursive;
    /* min-width: 30vw; */
    line-height: 2.5rem;
    font-size: 1.5rem;
    font-weight: 300;
  }
  button {
    background-color: #f4ead5;
    border: 5px outset #ccd6a6;
    /* min-width: 5vw; */
    font-family: "Griffy", cursive;
    font-size: 1.5rem;
    color: #ffffff;
    font-weight: 500;
    cursor: pointer;
    :hover {
      background: #dae2b6;
      color: #fffbe9;
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  /* wrap: nowrap;
  justify-content: space-between; */
  align-items: center;
`;
const Li = styled.li`
  display: flex;
  margin-top: 0.5rem;
  background: linear-gradient(90deg, #f4ead5 0%, #ccd6a6 100%);
  line-height: 4rem;
  border-radius: 5px;
  font-family: "Griffy", cursive;
  min-width: 30vw;
  line-height: 2rem;
  font-size: 1.2rem;
  padding-right: 1rem;
  padding-left: 1rem;
  wrap: nowrap;
  height: 45px;
  justify-content: space-between;
  align-items: center;
  }
`;

// const AiFillEdit = styled.li`
//   display: flex;
//   flex-direction: column;
//   wrap: nowrap;
//   justify-content: space-between;
//   align-items: center;
// `;
