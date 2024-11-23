import React, { useState } from "react";

import "./AddNotes.css";

const AddNotes = () => {
  const [title, setTitle] = useState("");
  const [notesBody, setNotesBody] = useState("");

  return (
    <div className="container">
      <div className="note-title-container">
        <input
          className="note-title"
          type="text"
          value={title}
          placeholder="Type note title..."
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="note-body-container">
        <textarea className="note-body" placeholder="Type note..." />
      </div>

      <div className="note-btn-container">
        <button id="note-btn" className="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNotes;
