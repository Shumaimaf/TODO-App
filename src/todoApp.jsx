import React, { useState } from 'react';
import TodoList from './todoList';
import './todoApp.css';
import { BsJournalBookmarkFill } from 'react-icons/bs';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState('');

    const addTodo = () => {
        if (todoText.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: todoText, completed: false }]);
            setTodoText('');
        }
    };

    const toggleTodo = id => {
        setTodos(prevTodos =>
            prevTodos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        );
    };

    const deleteTodo = id => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    return (
        <>
            <h1 className='heading'><BsJournalBookmarkFill /> Todo List</h1>
            <div className="container">
                <div className="todo-app">
                    <input
                        className='placeholder'
                        type="text"
                        placeholder="Enter a new todo..."
                        value={todoText}
                        onChange={e => setTodoText(e.target.value)}
                    />
                    <button className='addbtn' onClick={addTodo}>Add Todo</button>
                    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                </div>
            </div>
        </>
    );
};

export default TodoApp;
