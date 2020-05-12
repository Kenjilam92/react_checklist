import React from 'react'

const Form = props => {
    return(
        <form className="jumbotron d-flex justify-content-around" onSubmit={e=>props.handleSubmit(e)}>
            <label htmlFor="addTask">Add a task: </label>
            <input 
                type="text" 
                value={props.valueInput}
                onChange={e=>props.handleInput(e.target.value)}
            />
            <button type="submit"className="btn btn-info">Add</button>
        </form>
    );
}

export default Form;