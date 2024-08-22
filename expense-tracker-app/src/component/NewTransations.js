// import { useRef } from "react";
import History from "./History";
function NewTransations({ deleteButton,expense, listInput , amountInput, add , editButton}) {
  

  

  return (
    <>
      <div className="NewTransations">
        <h> Add NewTransations</h>
        <br></br>
        <label>Text</label>
        <input
          ref={listInput}
          placeholder="Type Of Expense "
          type="text"
        ></input>

        <label>Amount</label>

        <input ref={amountInput} placeholder="Enter The Amount" type="number"></input>

        <button onClick={add}> Add Transation</button>
      </div>
      <h> History</h>

      <History></History>
      {expense.map((items)=>{
        return(
        <History
           id={items.id}
           text={items.text}
           expense={items.expense}
           deleteButton={deleteButton}
           editButton={editButton}

          
           
          ></History>)
      }
      )}
    </>
  );
}

export default NewTransations;
