import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ tasks, onToggleCompleted, match }) => {
    let filteredTasks
    switch (match.params.filter) {
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed)

            break;
        default:
            filteredTasks = tasks
    }
    console.log(filteredTasks)
    if (filteredTasks.length === 0) {
        return (
            <>
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    <li className="list-group-item">Aucune tâches à afficher</li>
                </ul>
            </>
        )
    }
    return (
        <>
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
                {
                    filteredTasks.map((task) => <ToDo task={task} key={task.id} onToggleCompleted={onToggleCompleted} />)
                }
            </ul>
        </>
    )
}

export default ToDoList;