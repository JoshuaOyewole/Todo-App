import { useState } from 'react'
import PrimaryBtn from '../button/Button';

function TodoForm(props) {
    const { cancelAddTodoForm } = props;

    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");


    const handleForm = (e) => {
        setLoading(true);
        e.preventDefault();
        console.log({title,description,dueDate});

        //Close the Form after successfully sending
        cancelAddTodoForm()
    }

   
    return (
        <div className="w-full sm:w-4/5 lg:w-full xl:w-3/4">
            <form name="todo" onSubmit={handleForm}>
                <div className="grid gap-4 ">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Description
                        </label>
                        <textarea
                            name="description"
                            rows="4"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write a short description...">
                        </textarea>

                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <label 
                            htmlFor="dueDate" 
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Due Date
                        </label>
                        <input 
                            type="date" 
                            value={dueDate}
                            onChange={(e)=>setDueDate(e.target.value)}
                            className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" 
                            required 
                        />

                    </div>
                    <div>
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={() => cancelAddTodoForm()}>Cancel</button>

                        {loading ? <PrimaryBtn /> :
                            (<input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" value="Add Task" />)}
                    </div>
                </div>

            </form>
        </div>
    )
}

export default TodoForm