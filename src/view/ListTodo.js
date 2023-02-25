import { AiOutlineCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, checkTodo, filterTodos } from "../state/toDoSlice";
import styled from "styled-components";

const ListTodo = () => {
  const { todoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();

  return (
    <div>
      <Div id="List">
        <div>
          {todoList.map(({ id, content, completed, show }) => {
            return (
              show && (
                <Li key={id} completed={completed}>
                  <IconComplete>
            
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      style={{ color: completed ? "black" : "#8FC0A9" }}
                      onClick={() => dispatch(checkTodo({ id }))}
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />{" "}
                    </svg>
            
                  </IconComplete>
                  {/* <IconComplete>
                    <AiFillPlusCircle
                      style={{ color: completed ? "#C8D5B9" : "#8FC0A9" }}
                      onClick={() => dispatch(checkTodo({ id }))}
                    />
                  </IconComplete> */}
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

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -4.5rem;
`;

const Li = styled.li`
  display: flex;
  margin-top: 0.5rem;
  background: #ffffff;
  line-height: 4rem;
  border: 3px solid;
  border-radius: 5px;
  font-family: "Shantell Sans", cursive;
  min-width: 60vw;
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

const Icon = styled.div`
  cursor: pointer;
  color: #8fc0a9;
  line-height: 4.5rem;
`;

const IconComplete = styled.div`
  cursor: pointer;
  color: #ffb26b;
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
    background-color: #faf3dd;
    line-height: 2.5rem;
    font-size: 1rem;
    color: black;
    width: 6rem;
    text-align: center;

    cursor: pointer;
    :hover {
      color: #8fc0a9;
    }
    :active {
      color: #8fc0a9;
    }
  }
`;
