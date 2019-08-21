import React from 'react';

function TodoList({ list, onDelete, onToggle }) {
    return (
        <div>
            <h2>Todo List:</h2>
            {list.filter(({isDone}) => !isDone).map(({ id, name, isDone }) => (
                <div key={id}>
                    <input id={id} type={'checkbox'} onChange={() => onToggle(id)} checked={isDone} />
                    <label htmlFor={id}>{name}</label>
                    <button onClick={() => onDelete(id)}>X</button>
                </div>
            ))}
            
            <h2>Done List:</h2>
                {list.filter(({isDone}) => isDone).map(({ id, name, isDone }) => (
                    <div key={id}>
                        <input id={id} type={'checkbox'} onChange={() => onToggle(id)} checked={isDone} />
                        <label htmlFor={id}>{name}</label>
                        <button onClick={() => onDelete(id)}>X</button>
                    </div>
                ))}
                
        </div>
    );
}

export default TodoList;
