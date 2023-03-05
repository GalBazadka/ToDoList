import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCheckCircle, BsCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, checkTodo, filterTodos } from "../state/toDoSlice";
import Background from "../img/liBackground.jpg";
import styled from "styled-components";
import { useState } from "react";

const ListTodo = () => {
  const { todoList } = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState("All");

  const changefilter = (newFilter) => {
    dispatch(filterTodos({ currentFilter: newFilter }));
    setSelectedFilter(newFilter);
  };

  return (
    <div>
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
                      marginTop: "1.2rem",
                    }}
                    onClick={() => dispatch(checkTodo({ id }))}
                  />
                  <BsCheckCircle
                    style={BsCheckCircleStyle(completed)}
                    onClick={() => dispatch(checkTodo({ id }))}
                  />
                  <Content>{content}</Content>
                  <span>
                    <AiOutlineCloseCircle
                      style={{
                        color: "#FFC3A1",
                        cursor: "pointer",
                        marginTop: "1.2rem",
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
        <Button
          selected={selectedFilter === "All"}
          onClick={() => changefilter("All")}
        >
          All
        </Button>
        <Button
          selected={selectedFilter === "Active"}
          onClick={() => changefilter("Active")}
        >
          Active
        </Button>
        <Button
          selected={selectedFilter === "Completed"}
          onClick={() => changefilter("Completed")}
        >
          Completed
        </Button>
      </Filter>
    </div>
  );
};
export default ListTodo;

const BsCheckCircleStyle =(completed)=>({
  display: completed ? "block" : "none",
  height: "1rem",
  width: "1rem",
  cursor: "pointer",
  marginTop: "1.2rem",
})

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 6rem;
`;

const Li = styled.li`
  display: flex;
  margin-top: 0.5rem;
  padding-right: 1rem;
  padding-left: 1rem;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 90%;
  height: 3.5rem;
  line-height: 3.5rem;
  font-family: "Shantell Sans", cursive;
  font-size: 1.2rem;
  color: black;
  text-decoration: ${(props) => (props.completed ? `line-through` : `none`)};
`;

const Content = styled.div`
  min-width: 55vw;
  padding-left: 1rem;
`;

const Filter = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Button = styled.div`
  margin: 0.1rem;
  border-radius: 5px;
  background: #ffc3a1;
  opacity: 0.8;
  width: 6.5rem;
  line-height: 2.5rem;
  font-size: 0.9rem;
  text-align: center;
  font-weight: 600;
  color: ${(props) => (props.selected  ? `#B05E27` : `black`)};
  color: ${(props) => (props.selected  ? `#B05E27` : `black`)};
  color: ${(props) =>
    (props.selected ? `#B05E27` : `black`)};

  cursor: pointer;
  :hover {
    color: #b05e27;
  }
`;
