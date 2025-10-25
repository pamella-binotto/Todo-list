import TodoHeader from "./components/todoHeader"
import TodoForm from "./components/todoForm"
import TodoList from "./components/todoList"
import { themeConfig } from "./contexts/theme"
import {ThemeContext} from "./contexts/ThemeContext"
import {useContext} from "react"





function App() {

  const {theme} = useContext(ThemeContext);

  return (
    <main className= {`h-screen ${themeConfig[theme].layout.backgroundColor}`}  >
      <div className={` h-80 bg-cover bg-center ${themeConfig[theme].layout.heroClass} `}>

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
