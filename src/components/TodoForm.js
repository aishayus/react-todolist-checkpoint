import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input){
            alert('Please enter a task')
            return
        }
        addTodo(input)
        setInput('')
    }

    return (
        //Form for the user to input tasks. OnSubmit is used but OnClick
        //on the button 
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text'
            className='todo-input'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Input your task for the day'/>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}

export default TodoForm