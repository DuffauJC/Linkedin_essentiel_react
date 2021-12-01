import React,{useState} from 'react'

const AddTask = (props) => {
   
   const [state,setState]=useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.onAddTask(state)
        props.history.push('/')
    }
    return (
        <section>
            <h1 className="m-3">Nouvelle tâche</h1>
            <div className="card mx-3">
                <form className="card-body" onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <label form="taskName">Nom de la tâche</label>
                        <input type="text" className="form-control" name="taskName" id="taskName" required value={state.value} onChange={(e) => {
                            setState(e.target.value)
                        }} />
                    </div>
                    <button type="submit" className="btn btn-primary">Créer</button>
                </form>
            </div>
        </section>
    )
}

export default AddTask
