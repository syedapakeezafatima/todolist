import { useState } from "react";

export const Todolist = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setTodoInput(event.target.value);
  };

  const submitTodo = () => {
    if (todoInput.trim() !== "") {
      // Check if input is not empty
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <h1 className="heading">ToDo Application</h1>
        </div>
        <div className="displayTodoBox">
          <p>Available Todos</p>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button
                  className="delteteButton"
                  onClick={() => deleteTodo(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="inputBox">
          <input value={todoInput} onChange={handleInputChange} type="text" />
          <button onClick={submitTodo}>Add Todo</button>
        </div>
      </div>
    </>
  );
};
