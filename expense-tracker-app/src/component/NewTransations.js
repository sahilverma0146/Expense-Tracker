// import { useRef } from "react";
import History from "./History";
function NewTransations({
  deleteButton,
  expense,
  listInput,
  amountInput,
  add,
  update,
  editButton,
  handleChange,
  toogle,
}) {
  return (
    <>
      <div className="NewTransations">
        <h> Add New Transations</h>
        <br></br>
        <label>Text</label>
        <input
          ref={listInput}
          placeholder="Type Of Expense "
          type="text"
          onChange={handleChange}
        ></input>

        <label>Amount</label>

        <input
          ref={amountInput}
          placeholder="Enter The Amount"
          type="number"
          onChange={handleChange}
        ></input>

        <div>
        {toogle ? (
          <i class="fa-solid fa-file-pen" onClick={update}></i>
        ) : (
          <i class="fa-solid fa-plus" onClick={add}></i>
        )}
        </div>
      </div>

      <h> History</h>

      <History></History>
      {expense.map((items) => {
        return (
          <History
            id={items.id}
            text={items.text}
            expense={items.expense}
            deleteButton={deleteButton}
            editButton={editButton}
          ></History>
        );
      })}
    </>
  );
}

export default NewTransations;
