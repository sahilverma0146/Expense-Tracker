import "./Tracker.css";
import History from "./History.js";
import NewTransations from "./NewTransations.js";
function Tracker() {
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
            <p>$56</p>
          </div>
          <div className="Expense">
            Expense
            <p>56$</p>
          </div>
        </div>
        <br />

        <History></History>
        <NewTransations></NewTransations>
      </div>
    </>
  );
}

export default Tracker;
