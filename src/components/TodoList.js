import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Nhập công việc mới"
            />
            <button onClick={addTodo}>Thêm</button>

            <p>
                {todos.map((todo, index) => (
                    <p key={index}>
                        {todo}
                        <button onClick={() => deleteTodo(index)}>Xóa</button>
                    </p>
                ))}
            </p>
        </div>
    );
};

export default TodoList;
