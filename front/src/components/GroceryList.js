import React, {useState} from 'react'

const Todo = ({ todo, index,  completeTodo, removeTodo }) => 
<div className="todo"
style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
    {todo.text}
    <div>
    <button onClick={() => removeTodo(index)}>x</button>
        <button onClick={() => completeTodo(index)}>In my cart</button>
      </div>
    </div>;

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
      <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
    </>
  );
}

function GroceryLists() {
  const [todos, setTodos] = useState([
    { text: "Tomatoes",
    isCompleted: false },
    { text: "Onions",
    isCompleted: false },
    { text: "Potatoes",
    isCompleted: false }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
  export default GroceryLists;