function NewTransations() {
  return (
    <>
      <div className="NewTransations">
        <h> Add NewTransations</h>
        <br></br>
        <label>Text</label>
        <input placeholder="Type Of Expense " type="text"></input>

        <label>Amount</label>

        <input placeholder="Enter The Amount" type="number"></input>

        <button> Add Transation</button>
      </div>
    </>
  );
}

export default NewTransations;
