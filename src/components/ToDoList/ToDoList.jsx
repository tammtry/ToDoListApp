import React, { useState } from "react";
import ToDo from "../ToDo/ToDo";

const ToDoList = ({toDoList, onDelete, onUpdate, onEdit}) => {

  return(
    <div>
      {toDoList.map(todo => {
        return (
          <ToDo key={todo.id} todo={todo} onDelete={onDelete} onUpdate={onUpdate} onEdit={onEdit}/>
        )       
      })}
    </div>

  );
};

export default ToDoList;