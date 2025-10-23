import TodoHeader from "./components/todoHeader"


function App() {

  return (
    <main className="bg-neutral-very-dark-blue h-screen">
      <div className="bg-[url('/images/bg-desktop-dark.jpg')] h-80 bg-cover bg-center">

        <div className="max-w-[43.75rem] m-auto p-2">

          <TodoHeader></TodoHeader>

          <form className="relative mb-10">
            <span className="absolute w-6 h-6 border border-neutral-dark-grayish-blue top-1/2"></span>

            <input type="text" placeholder="Create a new todo..." name="todo" className="bg-neutral-very-dark-desaturated-blue text-white w-full rounded-md py-6 pl-16 outline-none text-lg" />

          </form>
        </div>
      </div>
    </main>
  )
}

export default App
