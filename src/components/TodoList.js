import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoList = ({task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className='Todo'>
            {/* Displays the list of task added 
            Function is defined in the TodoWrapper*/}
            <p className={`${task.completed?
                'completed' : ''}`} 
                onClick={() => {toggleComplete(task.id)}}>
                {task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => {editTodo(task.id)}}/>
                <FontAwesomeIcon icon={faTrash} onClick={() => {deleteTodo(task.id)}}/>
            </div>
        </div>
    )
}

export default TodoList