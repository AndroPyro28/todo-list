import React, { useState } from 'react'
function AddTask({ textHeader, appendCompletedItem, completeItems }) {

    const [tasks, setTasks] = useState([]);
    const [addtask, setTask] = useState('');

    const handleAddTask = () => {
        setTasks([...tasks, addtask])
        setTask('');
    }
    const handleDeleteTask = (chosenIndex) => {
        setTasks(tasks.filter((task, index) => index !== chosenIndex))

    }
    const handleCompleteTask = (chosenIndex) => {
        setTasks(tasks.filter((task, index) => index !== chosenIndex ? task : appendCompletedItem([...completeItems, task])));
    }

    const handleEditTask = (chosenIndex) => {
        const updatedTask = window.prompt("edit your task here");

        if (updatedTask) {
            setTasks([]);
            tasks.map((task, index) => {

                if (index !== chosenIndex) {
                    return setTasks(prevTask => [...prevTask, task])
                }
                else {
                    return setTasks(prevTask => [...prevTask, updatedTask])
                }

            });
        }
        //setTask("");
    }

    return (
        <div className="container">
            <h2>{textHeader}</h2>

            <div className="addTask">
                <input type="text" placeholder="Add A Todo" value={addtask} onChange={e => setTask(e.target.value)} />
                <button onClick={handleAddTask}>Add A Todo</button>
            </div>

            <div className="tasks">
                {tasks.map((task, index) => <div key={index} className="taskContainer">{task}
                    <i className="fas fa-clipboard-check completeIcon" onClick={() => handleCompleteTask(index)}></i>
                    <i className="fas fa-pen-square editIcon" onClick={() => handleEditTask(index)}></i>
                    <i className="fas fa-trash-alt deleteIcon" onClick={() => handleDeleteTask(index)} ></i></div>)}
            </div>
        </div>
    )
}

export default AddTask
