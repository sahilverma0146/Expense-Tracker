import "./Tracker.css";
import { useState, useRef } from "react";
import NewTransations from "./NewTransations.js";

function Tracker() {



  const [expense, setExpense] = useState([]);
  const [price, setPrice] = useState(0);
  const [updatePrice, setUpdatePrice] = useState(price);

  

  let listInput = useRef(null);
  let amountInput = useRef(null);

  function add() {
    const el = listInput.current.value;
    console.log(el);

    const expenseInput = amountInput.current.value;
    console.log(expenseInput);

    const newEl = {
      id: Date.now(),
      text: el,
      expense: expenseInput,
     
    };
    setExpense((prevExpenses)=>[...prevExpenses , newEl])

    setPrice((pre)=>[+pre + +newEl.expense]);
    console.log("price :", price);

    
    
    setUpdatePrice(()=> +price + +newEl.expense);

    listInput.current.value = "";
    amountInput.current.value = "";
  }

  return (
    <>
      <div className="container">
        <h> EXPENSE TRACKER</h>
        <br />
        <div className="Balance">
          <h> Your Balance :$500</h>
        </div>

        <br></br>
        <div className="Tracker-box">
          
          <div className="Expense">
            Expense
            <p>${updatePrice}</p>
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
