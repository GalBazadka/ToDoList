import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCheckCircle, BsCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, checkTodo, filterTodos } from "../state/toDoSlice";
import Background from "../img/back.jpg";
import styled from "styled-components";

const ListTodo = () => {
  const { todoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();

  return (
    <div>
      <Title> To Do List:</Title>
      <Div id="List">
        <div>
          {todoList.map(({ id, content, completed, show }) => {
            return (
              show && (
                <Li key={id} completed={completed}>
                  <BsCircle
                    style={{
                      display: completed ? "none" : "block",
                      height: "1rem",
                      width: "1rem",
                      cursor: "pointer",
                      marginTop: "1.5rem",
                    }}
                    onClick={() => {
                      dispatch(checkTodo({ id }));
                    }}
                  />
                  <BsCheckCircle
                    style={{
                      display: completed ? "block" : "none",
                      height: "1rem",
                      width: "1rem",
                      cursor: "pointer",
                      marginTop: "1.5rem",
                    }}
                    onClick={() => {
                      dispatch(checkTodo({ id }));
                    }}
                  />

                  <Content>{content}</Content>
                  <span>
                    <AiOutlineCloseCircle
                      style={{
                        color: "#8fc0a9",
                        cursor: "pointer",
                        marginTop: "1.5rem",
                      }}
                      onClick={() => dispatch(deleteToDo({ id }))}
                    />
                  </span>
                </Li>
              )
            );
          })}
        </div>
      </Div>
      <Filter>
        <button
          id="filterAll"
          onClick={() => dispatch(filterTodos({ currentFilter: "All" }))}
        >
          All{" "}
        </button>
        <button
          id="filterActive"
          onClick={() => dispatch(filterTodos({ currentFilter: "Active" }))}
        >
          Active{" "}
        </button>
        <button
          id="filterCompleted"
          onClick={() => dispatch(filterTodos({ currentFilter: "Completed" }))}
        >
          Completed{" "}
        </button>
      </Filter>
    </div>
  );
};
export default ListTodo;

const Title = styled.div`
  margin-top: 0px;
  height: 20vh;
  font-size: 300%;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -4.5rem;
  margin-bottom: 1rem;
`;

const Li = styled.li`
  display: flex;
  margin-top: 0.5rem;
  background-image: url(${Background});

  /* background: #ffffff; */
  line-height: 4rem;
  /* border: 3px solid; */
  /* border-radius: 5px; */
  font-family: "Shantell Sans", cursive;
  min-width: 90%;
  font-size: 1.2rem;
  padding-right: 1rem;
  padding-left: 1rem;
  height: 4rem;
  color: black;
  text-decoration: ${(props) => (props.completed ? `line-through` : `none`)};
  &:nth-child(4n) {
    border-color: #8fc0a9;
  }
  &:nth-child(4n + 1) {
    border-color: #8fc0a9;
  }
  &:nth-child(4n + 2) {
    border-color: #8fc0a9;
  }
  &:nth-child(4n + 3) {
    border-color: #8fc0a9;
  }
`;

const Content = styled.div`
  min-width: 55vw;
  padding-left: 1rem;
`;

const Filter = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    border-radius: 5px;
    background-color: #68b0ab;

    opacity: 0.8;
    line-height: 2.5rem;
    font-size: 0.9rem;
    color: black;
    width: 6.5rem;
    text-align: center;
    margin: 0.1rem;

    cursor: pointer;
    :hover {
      color: #8fc0a9;
    }
    :active {
      color: #8fc0a9;
    }
  }
`;
