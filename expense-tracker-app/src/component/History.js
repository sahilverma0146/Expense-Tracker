// import { useState } from "react";
import "./Tracker.css";
function History({dollar,text,expense}) {
    
  return (
    <>
      
      <div className="history">
        <h> {text} </h>
        <h>{expense}</h>
      </div>
    </>
  );
}

export default History;
