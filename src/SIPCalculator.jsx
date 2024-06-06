import React, { useState } from 'react';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [annualRate, setAnnualRate] = useState('');
  const [years, setYears] = useState('');
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateSIP = (e) => {
    e.preventDefault();

    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(annualRate) / 100 / 12;
    const n = parseInt(years) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n)) {
      alert("Please enter valid inputs");
      return;
    }

    const maturity = P * (((1 + r) ** n - 1) / r) * (1 + r);
    setMaturityAmount(maturity.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">SIP Calculator</h1>
      <form onSubmit={calculateSIP}>
        <div className="mb-4">
          <label className="block text-gray-700">Monthly Investment (₹)</label>
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Expected Annual Return Rate (%)</label>
          <input
            type="number"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Investment Duration (Years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Calculate
        </button>
      </form>
      {maturityAmount !== null && (
        <div className="mt-4 p-4 bg-green-100 rounded-md">
          <h2 className="text-xl font-bold">Maturity Amount: ₹{maturityAmount}</h2>
        </div>
      )}
    </div>
  );
};

export default SIPCalculator;
