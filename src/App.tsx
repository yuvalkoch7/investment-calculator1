import { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(5);

  const result = amount * Math.pow(1 + rate / 100, years);

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>📈 מחשבון השקעות</h1>

      <input
        type="number"
        placeholder="סכום"
        value={amount}
        onChange={(e) => setAmount(+e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="ריבית %"
        value={rate}
        onChange={(e) => setRate(+e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="שנים"
        value={years}
        onChange={(e) => setYears(+e.target.value)}
      />
      <br /><br />

      <h2>💰 תוצאה: {result.toFixed(0)} ₪</h2>
    </div>
  );
}
