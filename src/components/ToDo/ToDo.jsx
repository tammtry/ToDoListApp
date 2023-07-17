import React, { useState } from "react";
//This is TASK component. An object or row in todo list.

const AddList = ({todo, onDelete, onUpdate}) => {

    const [editing, setEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(todo.task);

    const handleDelete = () => {
        onDelete(todo.id);
    }
    
    const handleFinished = () => {
        const updatedToDo = {
            ...todo,
            complete: !todo.complete,
        };
        onUpdate(updatedToDo);
    }

    const handleEdit = () => {
        setEditing(true);
    }

    const handleChange = (e) => {
        setEditedTask(e.currentTarget.value);
    }

    const handleSave = () => {
        const updatedTask = {
            ...todo,
            task: editedTask,
        };
        onUpdate(updatedTask);
        setEditing(false);
    }

    return (
        <div id={todo.id}
            key={todo.id}
            name="todo"
            value={todo.id}
            style={{ textDecoration: todo.complete ? "line-through" : "none" }}
        >
            {!editing ? (
                <div>
                    {todo.task}
                    <button onClick={handleFinished}>Finished</button>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            ) : (
                <div>
                    <input
                        value={editedTask}
                        type="text"
                        onChange={handleChange}
                        contentEditable
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            )}
        </div>
    );
};

export default AddList;