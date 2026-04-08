import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function App() {
  const [initial, setInitial] = useState(10000);
  const [monthly, setMonthly] = useState(1000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(10);

  const monthlyRate = rate / 100 / 12;

  let total = initial;
  let invested = initial;

  const data = [];

  for (let i = 1; i <= years * 12; i++) {
    total = total * (1 + monthlyRate) + monthly;
    invested += monthly;

    if (i % 12 === 0) {
      data.push({
        year: i / 12,
        value: Math.round(total)
      });
    }
  }

  const profit = total - invested;

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        
        <div style={styles.left}>
          <h1>📊 Investment App</h1>

          <Input label="סכום התחלתי" value={initial} setValue={setInitial} />
          <Input label="הפקדה חודשית" value={monthly} setValue={setMonthly} />
          <Input label="ריבית (%)" value={rate} setValue={setRate} />
          <Input label="שנים" value={years} setValue={setYears} />

          <div style={styles.results}>
            <p>💼 השקעה: {invested.toLocaleString()} ₪</p>
            <p>🚀 רווח: {profit.toLocaleString()} ₪</p>
            <h2>💰 {Math.round(total).toLocaleString()} ₪</h2>
          </div>
        </div>

        <div style={styles.right}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}

function Input({ label, value, setValue }: any) {
  return (
    <div style={{ marginBottom: 15 }}>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(+e.target.value)}
        style={{
          width: "100%",
          padding: 10,
          borderRadius: 8,
          border: "none",
          marginTop: 5
        }}
      />
    </div>
  );
}

const styles = {
  page: {
    background: "#020617",
    minHeight: "100vh",
    color: "white",
    fontFamily: "Arial"
  },
  container: {
    display: "flex",
    gap: 30,
    padding: 40,
    flexWrap: "wrap" as const
  },
  left: {
    background: "#1e293b",
    padding: 25,
    borderRadius: 15,
    width: 320
  },
  right: {
    background: "#1e293b",
    padding: 25,
    borderRadius: 15,
    flex: 1,
    minWidth: 300
  },
  results: {
    marginTop: 20
  }
};
