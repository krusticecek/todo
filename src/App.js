import { useState } from "react";
import "./App.css";
import ToDoData from "./mocks/todos.json";

function App() {
  const [todos, setTodos] = useState(ToDoData);
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState("");
  const [editedTodo, setEditedTodo] = useState("");
  const [editedId, setEditedId] = useState(0);
  const [editedDescription, setEditedDescription] = useState("");

  const handleTodoChange = (value) => setTodo(value);
  const handleDescriptionChange = (value) => setDescription(value);

  const handleAddClick = () => {
    const newTodo = {
      id: todos.length + 10,
      todo,
      description,
    };
    setTodos([newTodo, ...todos]);
    setTodo("");
    setDescription("");
  };

  const handleCloseClick = (id) => {
    const FilteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(FilteredTodos);
  };

  const renderTodoCards = () =>
    todos.map(({ id, todo, description }) => (
      <div
        key={id}
        id={id}
        todo={todo}
        description={description}
        onCloseClick={() => handleCloseClick(id)}
        editedTodo={editedTodo}
        editedDescription={editedDescription}
        editedId={editedId}
        setEditedTodo={setEditedTodo}
        setEditedDescription={setEditedDescription}
        setEditedId={setEditedId}
      />
    ));
  return (
    <div className="Layout">
      <h1>TODO List</h1>
      <div className="Form">
        <input
          value={todo}
          onChange={(event) => handleTodoChange(event.target.value)}
          className="Field"
          name="name"
          placeholder="TODO"
        />
        <textarea
          value={description}
          onChange={(event) => handleDescriptionChange(event.target.value)}
          className="Field"
          name="description"
          placeholder="Description"
        ></textarea>
        <button className="Button" onClick={handleAddClick}>
          Add TODO
        </button>
      </div>
      {renderTodoCards}
    </div>
  );
}

export default App;
