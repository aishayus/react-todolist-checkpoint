import React, { useState } from 'react'

const EditTodoForm = ({editTodo, task}) => {
    const [input, setInput] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault()
        editTodo(input, task.id)
        setInput('')
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text'
            className='todo-input'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Update Task'/>
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    )
}

export default EditTodoForm