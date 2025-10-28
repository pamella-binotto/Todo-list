import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext"
import type { Todo } from "../../App";
import IconCheck from '/images/icon-check.svg'

interface TodoListProps {
  todoList: Todo[];
  toggleTodoCompleted: (id: number) => void;
}


const TodoList = ({ todoList, toggleTodoCompleted }: TodoListProps) => {

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={` ${themeConfig[theme].todo.backgroundColor} rounded-md`}>
        <ul>
          {
            todoList.map((todo) => (
              <li className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`} key={todo.id}>
                <div className="flex items-center gap-4">

                  <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] hover:p-[1px]">

                    <button onClick={() => toggleTodoCompleted(todo.id)} className={` w-full h-full border ${themeConfig[theme].todo.borderColor} rounded-full cursor-pointer ${themeConfig[theme].todo.backgroundColor} ${todo.completed ? 'bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%)))]' : '' } `} >

                      {todo.completed && <img src={IconCheck} alt="icone de marcado" className=" h-2 w-2 m-auto " />}

                    </button>
                  </span>

                  <p className={`${themeConfig[theme].todo.textColor} ${todo.completed ? "line-through opacity-50" : ""}`}>{todo.text}</p>
                </div>
              </li>))
          }
        </ul>

        {todoList.length > 0 && (
          <div className={` text-sm flex justify-between p-4 ${themeConfig[theme].layout.textColor} `}>


            <p>{todoList.length} Items total</p>

            <div className="hidden sm:flex gap-4 ">
              <button className={` text-bright-blue cursor-pointer  ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"} `}>All</button>
              <button className={` cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"} `}>Active</button>
              <button className={` cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"} `}>Completed</button>
            </div>

            <button className={` cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"} `} >Clear Completed</button>
          </div>

        )}
      </div>

      {todoList.length > 0 && (

        <div className={`${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].layout.textColor} flex justify-center gap-4 py-4 rounded-md  mt-4 sm:hidden`}>
          <button className={` text-bright-blue cursor-pointer  ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"} `}>All</button>
          <button className={` cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"} `} >Active</button>
          <button className={` cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"} `} >Completed</button>
        </div>

      )}

    </>
  )
}

export default TodoList;