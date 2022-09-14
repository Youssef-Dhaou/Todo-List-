import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK, FILTER } from "../actionTypes/actionTypes"

export const edit_task=(id, desc)=>{
    return{ type:EDIT_TASK, payload:{id, desc}}
}
export const delete_task=(id)=>{
    return{ type:DELETE_TASK, payload:id}
}
export const done_Task=(id)=>{
    return{ type:DONE_TASK, payload:id}
}

export const addTask=(NewDesc)=>{
    return{ type:ADD_TASK, payload:NewDesc}
}

export const FilterTodoList=(FilterText)=>{
    return{ type:FILTER, payload:FilterText}
}



