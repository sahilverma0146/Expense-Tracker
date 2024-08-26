import "./Tracker.css";
import { useState, useRef } from "react";
import NewTransations from "./NewTransations.js";

function Tracker() {
  const [expense, setExpense] = useState([]);
  const [price, setPrice] = useState(0);
  const [updatePrice, setUpdatePrice] = useState(price);

  const [updateTask, setUpdateTask] = useState(null);

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
    setExpense((prevExpenses) => [...prevExpenses, newEl]);

    setPrice((pre) => [+pre + +newEl.expense]);
    console.log("price :", price);

    setUpdatePrice(() => +price + +newEl.expense);

    listInput.current.value = "";
    amountInput.current.value = "";
  }

  function deleteButton(id) {
    console.log(" the id is ", id);
    console.log("delete button was clicked");

    setExpense(expense.filter((items) => items.id !== id));
  }

  function handleChange(){
    console.log("chnge done")
  }

  

  function editButton(id) {
    console.log(" the edit button id is :", id);
    console.log("editbutton ws clicked");
    const getTask = expense.filter((el) => id === el.id);
  
    
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
          // id={id}
          amountInput={amountInput}
          add={add}
          // id={id}
          expense={expense}
          setExpense={setExpense}
          deleteButton={deleteButton}
          editButton={editButton}
          handleChange={handleChange}
        ></NewTransations>
      </div>
    </>
  );
}

export default Tracker;
