import React, {useEffect, useState} from 'react';
import './App.css';
import db from './firebase'
import Basic from './form'
import TodoItem from './TodoItem'
import Navbar from './Navbar'
function App() {
  const[todos, setTodos] =useState(null)
  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc =>({
        id:doc.id,
        ...doc.data()
      }
        
      )))
    })

  }, []);

  return (
    <div className='App'>
      <Navbar/>
      <div className='todo-card'>
      <Basic/>
      <div className='todo-list'>
   {todos && todos.map(todo =>{
     return(
       <TodoItem title={todo.title} description={todo.description} completed={todo.completed} id={todo.id}/>
     
   )})}
   </div>
   {/* <button onClick={addData}>Add data</button> */}
   </div>
   </div>
  );
}

export default App;
