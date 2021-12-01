import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ToDoList from './ToDoList'
import NavBar from './NavBar'
import AddTask from './AddTask'
import initialData from '../initialData'
import uniqid from 'uniqid'
import Fetching from './Fetching'



const App = () => {

    const [state, setState] = useState({
        fetching: true,
        tasks:[]
    })

    useEffect(() => {
        let delay = Math.floor(Math.random() * 5000)
        console.log('chargement')
        setTimeout(() => {
            setState({
                fetching: false,
                tasks: initialData,
            })
        }, delay)
    }, [])

console.log('task',state.tasks)

    const onAddTask = (newTaskName) => {
        let newTask = {
            id: uniqid(),
            name: newTaskName,
            completed: false
        }
        setState(prevState => ({
            tasks: [...prevState.tasks, newTask]
        }))
    }

    const onToggleCompleted = (taskId) => {
        //get the task to modify
        let updTask = state.tasks.find(task => task.id === taskId)
        //toggle the value of completed in the task
        updTask.completed = !updTask.completed
        //put the new version of the task in the state
        setState(prevState => (
            prevState.tasks.map(task => {
                return task.id === taskId ? updTask : task
            })
        ))
    }



    const onDeleteCompleted = () => {
        setState(prevState => {
            let newState = prevState.tasks.filter(task => !task.completed)
            return {
                tasks: newState
            }
        })
    }


    return (
        <section id="todo">
            {state.fetching ? <Fetching /> : null}
            {console.log(state.tasks)}
            <BrowserRouter>
                <Switch>
                    <Route path='/add-task' render={(props) => <AddTask {...props} onAddTask={onAddTask} />} />
                    <Route path='/:filter?' render={(props) => <ToDoList {...props} tasks={state.tasks} onToggleCompleted={onToggleCompleted} />} />
                </Switch>
                <NavBar onDeleteCompleted={onDeleteCompleted} />
            </BrowserRouter>
        </section>
    )
}

export default App


