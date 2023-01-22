import React, { useState } from "react";
import { AiFillEdit, AiOutlineCloseCircle, AiFillPlusCircle, AiFillCheckCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, editTodo , completeTodo} from "../Reducers/toDoSlider";
import styled from "styled-components";

const ListTodo = () => {
  const { todoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [isComplete, setComplete] = useState(false);

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

  const onCompleteToggel = (id) => {
    setComplete(!isComplete);
    setState({ ...state, id, isComplete: !isComplete  });
    dispatch(completeTodo({ id ,isComplete}));
    console.log(" completed" +{id})

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
      
        <ul>
          {todoList.map(({ id, content }) => {
            return (
             
              <Li key={id}>
                <IconComplete>
                <AiFillPlusCircle onClick={() => onCompleteToggel(id)}/>
                </IconComplete>
                <Content>{content}</Content>
                <span>
                  <Icon>
                  <AiOutlineCloseCircle onClick={() => dispatch(deleteToDo({ id }))}/>
                  <AiFillEdit onClick={() => onEditToggle(id, content)} />
                  </Icon>
                </span>
              </Li>
            );
          })}
        </ul>
      )}
    </Div>
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
  background: #A4BE7B;
  line-height: 4rem;
  border-radius: 5px;
  font-family: "Griffy", cursive;
  min-width: 60vw;
  font-size: 1.2rem;
  padding-right: 1rem;
  padding-left: 1rem;
  height: 4rem;
}
`;

const Icon = styled.div`
  cursor: pointer;
  color: white;
  line-height: 4.5rem;
  padding: 1px;
`;

const IconComplete = styled.div`
  cursor: pointer;
  color: white;
  line-height: 4.5rem;
  :active{
    color: black;
  }
`;

const Content = styled.div`
  min-width: 55vw;
  padding-left: 1rem;
`;