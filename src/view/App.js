import styled from "styled-components";
import AddTodo from "./AddTodo"
import ListTodo from "./ListTodo"
import NewTask from "./NewTask"
import Background from "../img/wallpaper.webp";


function App() {
  return (
    <Div>
      <Title> To Do List:</Title>
      <AddTodo />
      <ListTodo />
      <NewTask />
    </Div>
  );
}

export default App;

const Div = styled.div`

  flex-direction: column;
  padding-top: 1.5rem;
  padding-bottom: 4rem;
  border-radius: 10px;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 85vh; 
  position: relative;
  font-family: 'Shantell Sans', cursive;
  display: flex;
  justify-content: flex-start;
`;


const Title = styled.div`
  margin-top: 0px;
  height: 100px;
  font-size: 300%;
  text-align: center;
`;




