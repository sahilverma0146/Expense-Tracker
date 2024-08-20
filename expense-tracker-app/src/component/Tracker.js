import "./Tracker.css";
import { useState, useRef } from "react";
import NewTransations from "./NewTransations.js";

function Tracker() {
  const [expense, setExpense] = useState([]);
  const [price, setPrice] = useState(0);

  // useEffect(() => {
  //   // Calculate the total price

  // }, [expense]);

  let listInput = useRef(null);
  let amountInput = useRef(null);

  function add() {
    let el = listInput.current.value;
    console.log(el);

    let expense = amountInput.current.value;
    console.log(expense);

    const newEl = {
      id: Date.now(),
      text: el,
      expense: expense,
    };
    setExpense((pre) => [...pre, newEl]);
    listInput.current.value = "";
    amountInput.current.value = "";
    
    
      

   // set price shows render the total price 
    setPrice();


  }
 
  

  return (
    <>
      <div className="container">
        <h> EXPENSE TRACKER</h>
        <br />
        <div className="Balance">
          <h> Your Balance :$450</h>
        </div>

        <br></br>
        <div className="Tracker-box">
          <div className="Income">
            Income
            <p>{price}</p>
          </div>
          <div className="Expense">
            Expense
            <p>{price}</p>
          </div>
        </div>
        <br />

        <NewTransations
          listInput={listInput}
          amountInput={amountInput}
          add={add}
          expense={expense}
          setExpense={setExpense}
        ></NewTransations>
      </div>
    </>
  );
}


export default Tracker;
