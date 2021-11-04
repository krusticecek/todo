import { UseState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = UseState();
  const [description, setDescription] = UseState("");
  const [editedTodo, setEditedTodo] = UseState("");
  const [editedDescription, setEditedDescription] = UseState("");

  const handleTodoChange = (value) => setTodo(value);
  const handleDescriptionChange = (value) => setDescription(value);
}

export default App;
