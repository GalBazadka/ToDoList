import styled from "styled-components";
import AddTodo from "./AddTodo"
import ListTodo from "./ListTodo"
import NewTask from "./NewTask"
import Filter from "./Filter"
import Background from "../img/wallpepper.jpg";


function App() {
  return (
    <Div>
      <NewTask />
      <Title> To Do List:</Title>
      <AddTodo />
      <ListTodo />
      <Filter/>
    </Div>
  );
}

export default App;

const Div = styled.div`
  margin: auto;
  flex-direction: column;
  padding-top: 1.5rem;
  padding-bottom: 4rem;
  border-radius: 10px;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 80vh; 
  position: relative;
  font-family: 'Shantell Sans', cursive;
  display: flex;
  justify-content: flex-start;
`;

const Title = styled.div`
  margin-top: 0px;
  height: 10vh;
  font-size: 300%;
  font-weight: 900;
  text-align: center;
  /* color: white; */
`;




