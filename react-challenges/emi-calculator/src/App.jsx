import { useState } from "react";

import { tenures } from "./util/constants";

const App = () => {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(0);
  const [fee, setFee] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const calculateEMI = (downPayment) => {
    if (!cost) return;

    const loanAmount = cost - downPayment;
    const rateOfInterest = interest;
    const years = tenure / 12;

    const emiPerYear =
      (loanAmount * rateOfInterest * (1 + rateOfInterest) ** years) /
      (1 + rateOfInterest) ** (years - 1);
    console.log(emiPerYear);
    return Number(emiPerYear / 12).toFixed(0);
  };

  const calculateDownPayment = (emi) => {
    if (!cost) return;

    const dp = 100 - (emi / calculateEMI(0)) * 100;
    return Number(((dp / 100) * cost).toFixed(0));
  };

  const updateEMI = (e) => {
    if (!cost) return;

    const dp = Number(e.target.value);
    setDownPayment(dp);

    const emi = calculateEMI(dp);
    setEmi(emi);
  };

  const updateDownPayment = (e) => {
    if (!cost) return;

    const emi = Number(e.target.value).toFixed(0);
    setEmi(emi);

    const dp = calculateDownPayment(emi);
    setDownPayment(dp);
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
            onChange={(e) => setCost(Number(e.target.value))}
          />
        </div>
        <div className="calculator__input calculator__input--interest">
          <span className="input-title">Interest Rate (in %)</span>
          <input
            type="text"
            value={interest}
            onChange={(e) => setInterest(Number(e.target.value))}
          />
        </div>
        <div className="calculator__input calculator__input--fee">
          <span className="input-title">Processing fee (in %)</span>

          <input
            type="text"
            value={fee}
            onChange={(e) => setFee(Number(e.target.value))}
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
            <span>₹{emi}</span>
            <span>100%</span>
          </div>
        </div>

        <div className="calculator__input calculator__input--tenure">
          <span className="input-title">Tenure</span>
          <div className="btns-tenure">
            {tenures.map((value) => (
              <button
                className={`btn btn-tenure ${
                  tenure === value ? "btn-tenure--select" : ""
                }`}
                key={value}
                onClick={() => setTenure(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
