"use client";

import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface OverviewProps {
  data: any[];
  showTooltip?: boolean;
  limit?: number;
}

const tickFormatter = (value: string, limit: number) => {
  if (value.length < limit) return value;
  return `${value.substring(0, limit)}...`;
};

const CustomTooltip = ({ label }: any) => {
  return <div className="custom-tooltip p-0 m-0">{label}</div>;
};

export const Overview: React.FC<OverviewProps> = ({
  data,
  showTooltip,
  limit = 6,
}) => {
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <ResponsiveContainer width="99%" aspect={3}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => tickFormatter(value, limit)}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        {showTooltip && <Tooltip content={<CustomTooltip />} />}
        <Bar dataKey="value" fill="#5557a1" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};
