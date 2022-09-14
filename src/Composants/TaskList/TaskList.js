import React from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const filterTask = useSelector((state) => state.filterState);
  return (
    <div className="show">
      <h1
        style={{
          color: "#FFFFFF",
          background: "#0e8dbc",
          textShadow:
            "0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)",
        }}
      >
        {" "}
        List of Tasks
      </h1>
      {filterTask==="ALL"?tasks.map((el) => (
        <Task key={el.id} el={el} />   
      )):filterTask==="COMPLETED"?
      tasks.filter(el=>el.isdone).map((el) => (
        <Task key={el.id} el={el} />
      )):
      tasks.filter(el=>!el.isdone).map((el) => (
        <Task key={el.id} el={el} />
      ))
      }
    </div>
  );
};

export default TaskList;
