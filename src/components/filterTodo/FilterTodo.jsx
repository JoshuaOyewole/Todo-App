import React, { useState } from 'react'
import PrimaryBtn from '../button/Button';


function FilterTodo(props) {

  const { showFilter, updateTodos, todos, loading, updateLoadingState } = props;

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [sort, setSort] = useState('asc');

  //FILTER BY DATE
  const filterByDate = (searchField) => {
    if (!date == "") {
      const result = todos.filter(todo => {
        return todo.dueDate.toLowerCase().includes(searchField)
      })
      updateLoadingState(false)
      updateTodos(result);
    }
  }

  //FILTER BY TITLE
  const filterByTitle = (searchField) => {
   
    if (!title == "") {
      const result = todos.filter(todo => {
        return todo.title.toLowerCase().includes(searchField.toLowerCase());
      })  
      updateLoadingState(false)
      updateTodos(result);

    }
  }

  const handleFormFilter = (e) => {
    e.preventDefault();
    if(title == "" & date==""){
     return alert('Kindly fill the filter filed')
    }
    updateLoadingState(true)
    filterByTitle(title)
    filterByDate(date)
    showFilter()
  }


  return (
    <div className='filterContainer bg-white w-full rounded-sm p-3 absolute right-0 top-12'>
      <form name="todo" onSubmit={handleFormFilter}>
        <div className="grid gap-4 ">
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title"
            
            />
          </div>
          <div>
            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Date"

            />
          </div>

          <div className="flex">
            <div className="flex items-center ">
              <input
                id="ascending"
                type="radio"
                onChange={(e) => setSort(e.target.value)}
                value="asc"
                name="sort"
                checked={sort === 'asc'}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Ascending
              </label>
            </div>
            <div className="flex items-center ml-4">
              <input
                id="default-radio-1"
                type="radio"
                value="desc"
                name="sort"
                onChange={(e) => setSort(e.target.value)}
                checked={sort === 'desc'}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="descending"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Descending
              </label>
            </div>
          </div>
          <div>
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={() => showFilter()}>Cancel</button>


            {loading ? <PrimaryBtn value='loading' /> :
              (<input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" value="Filter" />)}
          </div>
        </div>

      </form>
    </div>
  )
}

export default FilterTodo