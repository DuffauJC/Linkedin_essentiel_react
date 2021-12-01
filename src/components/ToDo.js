import React, { useState } from 'react'

const ToDo = (props) => {
   
    
    const [state, setState] = useState({
        completed: props.task.completed
    })
         
    
    const toggleCompleted = () => {
        let { onToggleCompleted, task } = props
        setState(prevState => ({
            completed: !prevState.completed
        }))
        onToggleCompleted(task.id)
    }



    return (
        <li className={"list-group-item d-flex align-items-center justify-content-between " + (state.completed ? 'bg-success':'null')}>
            {props.task.name}
            <button className={"btn btn-sm ml-auto " + (state.completed ? 'btn-success' : 'btn-outline-success')} onClick={toggleCompleted}>&#x2713;</button>
        </li>
    )
}

export default ToDo


