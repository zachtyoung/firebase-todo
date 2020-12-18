import React,{useState} from 'react'
import db from './firebase'
import EditForm from './EditForm'
import checkIncomplete from './assets/checkmark-incomplete.svg'
import checkComplete from './assets/checkmark-complete.svg'
import clear from './assets/clear.svg'

export default function TodoItem({title, description, completed, id,timestamp}) {

    const[todoVal, setTodoVal]=useState(title)

    const completeTask = () =>{
        
        db.collection('todos').doc(id).set({
            title: title,
            description: description,
            completed:!completed,
            timestamp:timestamp
          })
    }
  
    return (
    <div className='todo'>
        <button className='completed-button' onClick={completeTask}><img src={completed?checkComplete:checkIncomplete}></img></button>
        <h1 className={completed? 'completed-styling':null}>{title}</h1>
            <button className='delete-button' onClick={()=>{
                db.collection('todos').doc(id).delete()
            }}><img src={clear}></img></button>
  </div>
    )
}
