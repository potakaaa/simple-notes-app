import React from "react";

import "./App.css";
import AddNotes from "./pages/AddNotes.tsx";

const App = () => {
  return (
    <div className="container">
      <div className="box-container">
        <AddNotes />
      </div>
      <div className="box-navigation">
        <div className="navigation">
          <h3>list</h3>
          <h3>add</h3>
          <h3>me</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
