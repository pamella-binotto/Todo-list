import TodoHeader from "./components/todoHeader"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/todoList"
import { TodoContainer } from "./components/TodoContainer"





function App() {

  return (
    <TodoContainer>

      <TodoHeader></TodoHeader>
      <TodoForm> </TodoForm>
      <TodoList></TodoList>
      </TodoContainer>

      );
}

      export default App
