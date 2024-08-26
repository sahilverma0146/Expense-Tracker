// import { useState } from "react";
import "./Tracker.css";
function History({ deleteButton, text, expense, id, editButton }) {
  return (
    <>
      <div className="history">
        <button className="editButton" onClick={() => editButton(id)}>
          Edit
        </button>

        <h> {text} </h>
        <h>{expense}</h>

        <button className="deleteButton" onClick={() => deleteButton(id)}>
          X
        </button>
      </div>
    </>
  );
}

export default History;
