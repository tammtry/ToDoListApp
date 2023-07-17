
import Ract, { useState } from 'react';

const ToDoForm = ({addTask, filterTasks}) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    const handleFilter = () => {
        filterTasks(false);
    }

    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange}/>
            <button>Add task</button>
        </form>
        <button onClick={handleFilter}>Filter</button>     
        </div>     
    );
};

export default ToDoForm;