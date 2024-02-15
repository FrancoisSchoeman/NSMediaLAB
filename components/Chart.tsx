"use client";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "2023-01-01", growth: 50 },
  { date: "2023-02-01", growth: 60 },
  { date: "2023-03-01", growth: 80 },
  { date: "2023-04-01", growth: 90 },
  { date: "2023-05-01", growth: 100 },
  { date: "2023-06-01", growth: 120 },
  { date: "2023-07-01", growth: 130 },
  { date: "2023-08-01", growth: 150 },
  { date: "2023-09-01", growth: 120 },
  { date: "2023-10-01", growth: 160 },
  { date: "2023-11-01", growth: 170 },
  { date: "2023-12-01", growth: 200 },
];

export function Chart() {
  return (
    <ResponsiveContainer width={600} height="100%">
      <BarChart data={data}>
        <XAxis hide />
        <Bar type="monotone" dataKey="growth" fill="#6d28d9" />
        <Tooltip />
        <YAxis />
      </BarChart>
    </ResponsiveContainer>
  );
}
