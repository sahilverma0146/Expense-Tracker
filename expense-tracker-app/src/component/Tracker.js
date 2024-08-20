import "./Tracker.css";
import { useState, useRef } from "react";
import NewTransations from "./NewTransations.js";

function Tracker() {
  const [expense, setExpense] = useState([]);
  const [price, setPrice] = useState(0);
  const [updatePrice , setUpdatePrice]=useState(price);

  // useEffect(() => {
  //   // Calculate the total price

  // }, [expense]);

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
    setExpense((pre) => [...pre, newEl]);


    const number=newEl.expense
    console.log("the set price vl is :",number);
    setPrice(number);
    console.log("new price is :",price)
    // const newTotalPrice = price + number;
    
    setUpdatePrice(()=>updatePrice + newEl.expense);
    console.log("update price :",updatePrice)





    // setPrice(number);
    // const pr=number;
    // console.log(pr);
    // const updatePrice=price + newEl.expense;
    // console.log("updatepr :", updatePrice)
    // setUpdatePrice(updatePrice)
    listInput.current.value = "";
    amountInput.current.value = "";

    
    
    
    

   // set price shows render the total pr 
    setPrice(()=>expenseInput);


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
            <p>{updatePrice}</p>
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
