import React, { useState } from 'react'
import "./Tasks.css"
import { useDispatch } from 'react-redux'
import { delete_task, edit_task , done_Task} from '../../JS/Actions/Actions'

const Task = ({el}) => {
  const[newEdit, setNewEdit]= useState(false)
  const [newDesc, setNewDesc] = useState(el.desc)
  const dispatch= useDispatch()


  const handleEdit=()=>{
    setNewEdit(!newEdit)
    if(newEdit)
   { dispatch(edit_task(el.id, newDesc))}

}  
  return (
    <div className='show'>
    <div style={{display:"flex", justifyContent:"center", gap:"100px"}}>
      <div> 
        {newEdit? <input value={newDesc} onChange={(e)=> setNewDesc(e.target.value)} placeholder='Type your new description' /> : <h3 className={el.isdone ?"doneclass":"undoneclass"} style={{marginTop:"10px" }}> {el.desc}</h3>}
      </div>
      <div className="container"> 
        <button  className='btn btn-grid'  onClick={()=>handleEdit()} > {newEdit? "save": "edit"} </button>
        <button className='btn btn-grid'  onClick={()=>dispatch(delete_task(el.id))}> delete </button>
        <button  className='btn btn-grid' onClick={()=>dispatch(done_Task(el.id))}> {el.isdone? "done" :"unDone"} </button>
      </div>
    </div>
    </div> 
  )
}

export default Task