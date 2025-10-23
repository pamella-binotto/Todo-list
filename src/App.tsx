import TodoHeader from "./components/todoHeader"
import TodoForm from "./components/todoForm"
import TodoList from "./components/todoList"




function App() {

  return (
    <main className="bg-neutral-very-dark-blue h-screen">
      <div className="bg-[url('/images/bg-desktop-dark.jpg')] h-80 bg-cover bg-center">

        <div className="max-w-[43.75rem] m-auto p-8">

          <TodoHeader></TodoHeader>
          <TodoForm> </TodoForm>
          <TodoList></TodoList>

          

        </div>
      </div>
    </main>
  )
}

export default App
