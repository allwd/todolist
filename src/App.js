import React from 'react';
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function App() {
  const [items, setItems] = React.useState([])
  const addItem = (item) => {
    const newItems = [...items]
    newItems.push({
      id: String(new Date().getMilliseconds()),
      name: item,
      isDone: false
    })

    setItems(newItems)
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const toggleItem = (id) => {
    const newItems = [...items]
    const item = newItems.find(item => item.id === id)
    if (item) {
      item.isDone = !item.isDone
    }

    setItems(newItems)
  }

  return (
    <div>
      <h1>Todo app</h1>
      <AddTodo addItem={addItem} />
      <TodoList list={items} onDelete={deleteItem} onToggle={toggleItem} />
    </div>
  );
}

export default App;
