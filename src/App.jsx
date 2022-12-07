import { useState } from "react";
import Todo from "./components/todo/Todo";
import Spinner from "./components/Spinner/Spinner";
import TodoForm from "./components/todo/TodoForm";
import FilterTodo from "./components/filterTodo/FilterTodo"
import PrimaryBtn from "./components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
faFilter

function App() {
  const [loading, setLoading] = useState(false);
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [showFilterContainer, setShowFilterContainer] = useState(false);

  const addTodo = () => {
    setShowAddTodoForm(true);
  }

  const cancelAddTodo = () => {
    setShowAddTodoForm(false);
  }

  const showFilter = () => {
    setShowFilterContainer(!showFilterContainer)
  }


  return (
    <div className=" flex justify-start bg-gray-350 h-[95vh]  w-[95vw] sm:w-[85vw] 2xl:w-[65vw] rounded-xl flex-col lg:flex-row overflow-y-scroll">

      {/* Existing Tasks */}
      <aside className='bg-gray-light basis-auto md:basis-40 px-5 py-8  md:p-10 overflow-y-visible xl:overflow-y-scroll xl:basis-30 order-2 lg:order-1'>
        <div className="relative">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-blue mb-0">Task's</h3>
            <button className="flex items-center justify-between" onClick={() => showFilter()}>
              <FontAwesomeIcon icon={faFilter} className='text-gray-500 text-lg' /> <span className="text-lg text-gray-500 pl-2"> Filter</span>
            </button>
          </div>

          <div className="line bg-bg h-0.5"></div>
        

        {showFilterContainer && <FilterTodo showFilter={showFilter} />}

        </div>
        {loading ?
          <Spinner /> : (
            <div className="task-container pt-4">
              <Todo
                title="Research Content  Ideas" dueDate="22-03-2022"
              />
              <Todo
                title="Buy some Food Stuffs"
                dueDate="27-12-2022"
              />
              <Todo
                title="Research Content  Ideas"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, explicabo."
                dueDate="12-04-2022"
              />
            </div>
          )}

      </aside>

      {/* Add a Task */}
      <main className='basis-auto lg:basis-70 px-5 py-8 lg:px-14  md:p-10 order-1 lg:order-2 '>
        <h2 className="text-blue-800">Todo</h2>
        <div className="line bg-gray-light h-1 w-full xl:w-3/4"></div>

        <div className="addTodoContainer mt-6 mb-6">
          <button type="button" className="w-full xl:w-3/4  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={addTodo}><FontAwesomeIcon icon={faPlus} />  Add a New Todo</button>
        </div>
        {showAddTodoForm && <TodoForm cancelAddTodoForm={cancelAddTodo} />}
      </main>
    </div>
  )
}

export default App
