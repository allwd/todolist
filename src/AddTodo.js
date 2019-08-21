import React from 'react';

function AddTodo({ addItem }) {
    const [item, setItem] = React.useState('')

    const handleAdd = event => {
        event.preventDefault();
        addItem(item);
    }

    return (
        <div>
            <form onSubmit={handleAdd}>
                <input value={item} placeholder={'New TODO'} onChange={event => setItem(event.currentTarget.value)} />
                <button type={'submit'}>Add</button>
            </form>
        </div>
    );
}

export default AddTodo;
