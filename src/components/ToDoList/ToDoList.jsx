import React, { useState } from "react";
import  AddList  from "../ToDo/ToDo";

const ToDoList = ({toDoList, onDelete, onUpdate, onEdit}) => {

  return(
    <div>
      {toDoList.map(todo => {
        return (
          <AddList todo={todo} onDelete={onDelete} onUpdate={onUpdate} onEdit={onEdit}/>
        )       
      })}
    </div>

  );
};

export default ToDoList;