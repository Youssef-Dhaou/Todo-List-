import { ADD_TASK,DELETE_TASK, DONE_TASK, EDIT_TASK, FILTER } from "../actionTypes/actionTypes";

const initialState={
    tasks:[{desc:"Grafic Design",id:0,isdone:true},{desc:"Web Full Stuck",id:1,isdone:false},{desc:"Hardware Developer",id:2,isdone:true}
],
filterState:"ALL"
}
export const Reducer=(state=initialState, {type, payload})=>{  
    switch (type) {
        case EDIT_TASK: return {...state, tasks:state.tasks.map((el)=>el.id=== payload.id? {...el, desc:payload.desc}: el )}
        case DELETE_TASK: return {...state, tasks:state.tasks.filter((el)=> el.id !== payload)}
        case ADD_TASK: return {...state, tasks:[...state.tasks, {desc: payload, id: state.tasks.length, isDone:false }]}
        case DONE_TASK: return {...state, tasks:state.tasks.map((el)=>el.id=== payload ?{...el, isdone:!el.isdone}: el )}
       
        case FILTER: return {...state, filterState:payload}
        

    
    
        default: return state
    }

}