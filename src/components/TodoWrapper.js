import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
//Helps Generate id
import {v4 as uuidv4} from 'uuid';
import TodoList from './TodoList';
import EditTodoForm from './EditTodoForm';

// Calling uuidv4 (similar to express in backend)
uuidv4();

const TodoWrapper = () => {

    const [todos, setTodos] = useState(() => {
        //Stores the tasks even after the page has been refreshed
        const localData = localStorage.getItem('todos')
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    //Functions that allows user to add tasks
    const addTodo = todo => {
        setTodos([...todos, 
            {id: uuidv4(), 
            task: todo, 
            completed: false, 
            isEditing: false}
        ])
            console.log(todos)
    }

    //Function that allows the user to mark if 
    //a task is completed or not
    const toggleComplete = id =>{
        setTodos(todos.map((todo) =>
            todo.id===id? {...todo, 
            completed: !todo.completed}
            : todo))
    }

    //Function that allows user to delete a task but not before confirming
    const deleteTodo = id => {
        if(window.confirm('Are you sure you want to delete this task')){
            setTodos(todos.filter(todo => todo.id !== id))
        }
    }

    //Function that allows user to edit a task
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {
        ...todo, isEditing: !todo.isEditing}: todo))
    }

    const editTask = (task,id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, task, 
            isEditing: !todo.isEditing} : todo))
    }

    return (
        <div className='TodoWrapper'>
            <h1>Organize your work</h1>
            {/* Passing a prop defined as a function 
            here to be called in TodoForm.js */}
            <TodoForm addTodo={addTodo}/>
            {
                todos.map((todo, index) => (
                    todo.isEditing ? (
                        <EditTodoForm editTodo={editTask} task={todo}/>
                    ) : (
                        <TodoList task={todo} 
                    key={index} 
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}/>
                )
                ))
            }
        </div>
    )
}

export default TodoWrapper