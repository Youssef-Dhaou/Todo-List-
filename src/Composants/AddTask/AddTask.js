import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../JS/Actions/Actions'
import './AddTask.css'

const AddTask = () => {
  const [newDesc, setNewDesc]= useState()
  const dispatch= useDispatch()
  const handleClick=()=>{
    if(newDesc){
    dispatch(addTask(newDesc))
    setNewDesc("")
    }
    else { alert("description is required")}
}
 
  return (
    <div>
        <input className=" inp" value={newDesc} type="text" placeholder='Add New Task here' onChange={(e)=>setNewDesc(e.target.value.trimStart())}/>
        <button className='addbtn' onClick={()=> handleClick()}> ADD </button>


    </div>




  )
}

export default AddTask