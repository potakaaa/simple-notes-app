import React, { useState } from "react";

import "./AddNotes.css";

const AddNotes = () => {
  const [title, setTitle] = useState("");

  return (
    <div className="container">
      <input
        className="note-title"
        type="text"
        value={title}
        placeholder="Type note title..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea className="note-body" placeholder="Type note..." />
      <button className="btn btn-primary">Save</button>
    </div>
  );
};

export default AddNotes;
