import "./Tracker.css";
import { useState, useRef } from "react";
import NewTransations from "./NewTransations.js";

function Tracker() {
  const [expense, setExpense] = useState([]);
  const [price, setPrice] = useState(0);
  const [updatePrice, setUpdatePrice] = useState(price);
  const [editingId, setEditingId] = useState(null);

  const [toogle, setToogle] = useState(false);
  // const [saveNew , setSaveNew]=useState(null);

  let listInput = useRef(null);
  let amountInput = useRef(null);

  function add() {
    const el = listInput.current.value;
    // console.log(el);

    const expenseInput = amountInput.current.value;
    // console.log(expenseInput);

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

    console.log("u r in add");
  }

  function deleteButton(id) {
    console.log(" the id is ", id);
    console.log("delete button was clicked");
    const toBeDeleteed = expense.filter((items) => {
      return items.id !== id;
    });

    setExpense(toBeDeleteed);
    console.log(toBeDeleteed);

    const newP = toBeDeleteed.map((vl) => {
      return vl.expense;
    });
    setPrice(+newP);
    console.log("price :", price);

    setUpdatePrice(+price);
  }

  function handleChange() {
    console.log("chnge done");
  }

  function editButton(id) {
    const getTask = expense.find((el) => id === el.id);
    console.log(getTask);
    listInput.current.value = getTask.text;
    amountInput.current.value = getTask.expense;
    setEditingId(id);
    console.log("the gettask is ", getTask);

    setToogle(true);
    console.log("u rin edit");
  }

  function update() {
    const newVl = listInput.current.value;
    const newExpense = amountInput.current.value;

    console.log("u r in updte");

    setExpense(
      expense.map((elem) => {
        if (elem.id === editingId) {
          return { ...elem, text: newVl, expense: newExpense };
        }
      })
    );

    listInput.current.value = "";
    amountInput.current.value = "";
    setToogle(false);
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
          toogle={toogle}
          update={update}
        ></NewTransations>
      </div>
    </>
  );
}

export default Tracker;
