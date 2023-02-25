import styled from "styled-components";
import AddTodo from "./AddTodo"
import ListTodo from "./ListTodo"
import Background from "../img/wallpaper.webp";


function App() {
  return (
    <Div>
      <ListTodo />
      <AddTodo />
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
  width: 100%;
  min-height: 75vh; 
  position: relative;
  font-family: 'Shantell Sans', cursive;
  display: flex;
  justify-content: flex-start;
`;



