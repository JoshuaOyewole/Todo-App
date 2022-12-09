import React, { useState } from 'react'
import FilterTodo from "../filterTodo/FilterTodo"
import Todo from "../todo/Todo";
import Spinner from "../Spinner/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
faFilter;


function TodoList(props) {
    const {
        loading,
        updateLoadingState,
        todos,
        setTodosDatas,
    } = props;

    const [showFilterContainer, setShowFilterContainer] = useState(false);

    /* MAKE FILTER COMPONENT VISIBLE */
    const showFilter = () => {
        setShowFilterContainer(!showFilterContainer)
    }


    return (
        <aside className='bg-gray-light basis-auto md:basis-40 px-5 py-8  md:p-10 overflow-y-visible xl:overflow-y-scroll xl:basis-30 order-2 lg:order-1'>
            <div className="relative">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-blue mb-0">Task's</h3>
                    <button className="flex items-center justify-between" onClick={() => showFilter()}>
                        <FontAwesomeIcon icon={faFilter} className='text-gray-500 text-lg' /> <span className="text-lg text-gray-500 pl-2"> Filter</span>
                    </button>
                </div>

                <div className="line bg-bg h-0.5"></div>


                {showFilterContainer && <FilterTodo
                    showFilter={showFilter} updateTodos={setTodosDatas} todos={todos}
                    loading={loading}
                    updateLoadingState={updateLoadingState}
                />}

            </div>

            {loading ?
                <Spinner /> : !todos.length > 0 ? <p className="text-blue-800 font-bold">There is currently no todo!</p> : (<div className="task-container pt-4">
                    {todos.map((todo, index) => <Todo
                        title={todo.title}
                        dueDate={todo.dueDate}
                        description={todo.description}
                        id={todo.id}
                        key={index}
                    />)}
                </div>)}


        </aside>
    )
}

export default TodoList