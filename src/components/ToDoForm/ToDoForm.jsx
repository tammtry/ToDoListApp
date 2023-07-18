import Ract, { useState } from 'react';

const ToDoForm = ({addTask}) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange}/>
            <button>Add task</button>
        </form>
            <div>

            </div>    
        </div>
             
    );
};

export default ToDoForm;