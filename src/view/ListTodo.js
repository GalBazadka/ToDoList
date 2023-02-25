import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCheckCircle, BsCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, checkTodo } from "../state/toDoSlice";
import Background from "../img/liBackground.jpg";
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
                  <BsCircle
                    style={{
                      display: completed ? "none" : "block",
                      height: "1rem",
                      width: "1rem",
                      cursor: "pointer",
                      marginTop: "1.2rem",
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
                      marginTop: "1.2rem",
                    }}
                    onClick={() => {
                      dispatch(checkTodo({ id }));
                    }}
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
    </div>
  );
};
export default ListTodo;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 6rem;
`;

const Li = styled.li`
  display: flex;
  margin-top: 0.5rem;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  line-height: 3.5rem;
  font-family: "Shantell Sans", cursive;
  min-width: 90%;
  font-size: 1.2rem;
  padding-right: 1rem;
  padding-left: 1rem;
  height: 3.5rem;
  color: black;
  text-decoration: ${(props) => (props.completed ? `line-through` : `none`)};
`;

const Content = styled.div`
  min-width: 55vw;
  padding-left: 1rem;
`;
