
import { useState } from "react";
import "./App.css";
import ToDoData from "./mocks/todos.json";
import Card from "./Components/Card";
import { useState } from "React";


function App() {
  const [cards, setCards] = useState(ToDoData);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editedId, setEditedId] = useState(0);
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const inputsAreEmpty = name.trim() === "" || description.trim() === "";

  const handleNameChange = (value) => setName(value);
  const handleDescription = (value) => setDescription(value);

  const handleAddTodoClick = () => {
    const newUser = {
      id: new Date().getTime(),
      name,
      description,
    };
    setCards([newUser, ...cards]);
    setName("");
    setDescription("");
  };

  const handleCloseClick = (id) => {
    const filteredUsers = cards.filter((user) => user.id !== id);
    setCards(filteredUsers);
  };

  const handleShowTodoEditClicked = (id) => {
    setEditedId(id);

    const editedUser = cards.find((user) => user.id === id);
    setEditedName(editedUser.name);
    setEditedDescription(editedUser.description);
  };

  const handleEditSaveClicked = (id) => {
    const editedUsers = cards.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          name: editedName,
          description: editedDescription,
        };
      }
      return user;
    });
    setCards(editedUsers);
    setEditedId(0);
  };

  const renderTodoCards = () =>
    cards.map(({ id, name, description }) => (
      <Card
        key={id}
        id={id}
        name={name}
        description={description}
        onCloseClick={() => handleCloseClick(id)}
        onEditClick={() => handleShowTodoEditClicked(id)}
        onClick={() => handleShowTodoEditClicked(id)}
        onEditSaveClick={() => handleEditSaveClicked(id)}
        editedName={editedName}
        editedDescription={editedDescription}
        editedId={editedId}
        setEditedName={setEditedName}
        setEditedDescription={setEditedDescription}
      />
    ));

  return (
    <div className="Layout">
      <h1>TODO List</h1>
      <div className="Form">
        <input
          value={name}
          onChange={(event) => handleNameChange(event.target.value)}
          className="Field"
          name="name"
          placeholder="Enter TODO"
        />
        <textarea
          value={description}
          onChange={(event) => handleDescription(event.target.value)}
          className="Field"
          name="description"
          placeholder="Describe TODO"
        ></textarea>
        <button
          disabled={inputsAreEmpty}
          className="Button"
          onClick={handleAddTodoClick}

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"

        >
          Add TODO
        </button>
      </div>
      {renderTodoCards()}
    </div>
  );
}

export default App;
