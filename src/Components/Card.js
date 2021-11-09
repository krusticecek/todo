import React from "react";

import {
  CardWrapper,
  CardHeading,
  CloseButton,
  CardEditingWrapper,
} from "./styles";

const Card = ({
  id,
  name,
  description,
  onCloseClick,
  onEditClick,
  editedId,
  editedName,
  editedDescription,
  setEditedName,
  setEditedDescription,
  onEditSaveClick,
}) => {
  const isEditActive = editedId === id;

  const renderNormalView = () => (
    <>
      <CardHeading onClick={onEditClick}>
        <h2 onClick={onEditClick}>{name}</h2>
        <CloseButton onClick={onCloseClick}>Done</CloseButton>
      </CardHeading>
      <p onClick={onEditClick}>{description}</p>
    </>
  );
  const renderEditView = () => (
    <CardEditingWrapper>
      <input
        type="text"
        value={editedName}
        onChange={(event) => setEditedName(event.target.value)}
        placeholder="Name"
      />
      <textarea
        placeholder="Description"
        value={editedDescription}
        onChange={(event) => setEditedDescription(event.target.value)}
        rows={10}
      />
      <button onClick={onEditSaveClick}>Save</button>
    </CardEditingWrapper>
  );
  return (
    <CardWrapper>
      {isEditActive ? renderEditView() : renderNormalView()}
    </CardWrapper>
  );
};

export default Card;
