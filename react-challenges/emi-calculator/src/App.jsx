import { useState } from "react";
const App = () => {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(0);
  const [fee, setFee] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const calculateEMI = () => {};
  const updateEMI = (e) => {
    if (!cost) return;

    const dp = Number(e.target.value);
    setDownPayment(dp);
  };
  const updateDownPayment = (e) => {
    if (!cost) return;

    const emi = Number(e.target.value);
    setEmi(emi);
  };
  return (
    <main>
      <h1 className="title">EMI Calculator</h1>

      <div className="calculator-inputs">
        <div className="calculator__input calculator__input--totalcost">
          <span className="input-title">Total Cost of Asset</span>
          <input
            type="text"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div className="calculator__input calculator__input--interest">
          <span className="input-title">Interest Rate (in %)</span>
          <input
            type="text"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
        </div>
        <div className="calculator__input calculator__input--fee">
          <span className="input-title">Processing fee (in %)</span>

          <input
            type="text"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
          />
        </div>
        <div className="calculator__input calculator__input--downpayment">
          <span className="input-title">Down Payment</span>
          <span className="amount-display">
            Total Down Payment - ₹ {downPayment}
          </span>

          <input
            className="slider"
            type="range"
            min={0}
            max={cost}
            value={downPayment}
            onChange={updateEMI}
          />
          <div className="labels">
            <span>0%</span>
            <span>₹{downPayment}</span>
            <span>100%</span>
          </div>
        </div>
        <div className="calculator__input calculator__input--loan">
          <span className="input-title">Loan per Month</span>
          <span className="amount-display">Total Loan Amount - ₹ {}</span>

          <input
            className="slider"
            type="range"
            min={calculateEMI(cost)}
            max={calculateEMI(0)}
            value={emi}
            onChange={updateDownPayment}
          />
          <div className="labels">
            <span>0%</span>
            <span>{emi}</span>
            <span>100%</span>
          </div>
        </div>

        <div className="calculator__input calculator__input--tenure">
          <span className="input-title">Tenure</span>
        </div>
      </div>
    </main>
  );
};

export default App;
