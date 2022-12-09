import React, { useState } from 'react'
import TodoForm from "./TodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus } from "@fortawesome/free-solid-svg-icons";

function AddTodo() {
    const [showAddTodoForm, setShowAddTodoForm] = useState(false);


    /* MAKE ADD TODO FORM VISIBLE */
    const addTodo = () => {
        setShowAddTodoForm(true);
    }

    /* HIDE ADD TODO FORM */
    const cancelAddTodo = () => {
        setShowAddTodoForm(false);
    }


    return (
        <main className='basis-auto lg:basis-70 px-5 py-8 lg:px-14  md:p-10 order-1 lg:order-2 '>
            <h2 className="text-blue-800">Todo</h2>
            <div className="line bg-gray-light h-1 w-full xl:w-3/4"></div>

            <div className="addTodoContainer mt-6 mb-6">
                <button type="button" className="w-full xl:w-3/4  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={addTodo}><FontAwesomeIcon icon={faPlus} />  Add a New Todo</button>
            </div>
            {showAddTodoForm && <TodoForm cancelAddTodoForm={cancelAddTodo} />}
        </main>
    )
}

export default AddTodo