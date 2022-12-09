import { useEffect, useState } from "react";
import { db } from "./config/firebase";
import {
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";
import TodoList from "./components/todo/TodoList";
import AddTodo from "./components/todo/AddTodo";


function App() {
  const [loading, setLoading] = useState(false); 
 
  const [todos, setTodosDatas] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

 
 
  
  /* FETCH TODOs FROM DB */
  useEffect(() => {
    setLoading(true)
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodosDatas(todosArray);
      setLoading(false)
    });
    
    return () => unsub();
  }, [])


  return (
    <div className=" flex justify-start bg-gray-350 h-[95vh]  w-[95vw] sm:w-[85vw] 2xl:w-[65vw] rounded-xl flex-col lg:flex-row overflow-y-scroll">

      {/* Existing Todos */}
      <TodoList  
        loading={loading}
        updateLoadingState={setLoading}
        todos={todos}
        setTodosDatas={setTodosDatas}
      />

      {/* Add a Todo*/}
      <AddTodo />
    </div>
  )
}

export default App
