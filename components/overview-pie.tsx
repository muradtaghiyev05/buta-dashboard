"use client";

import React from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface OverviewProps {
  data: any[];
}

export const OverviewPie: React.FC<OverviewProps> = ({ data }) => {
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <ResponsiveContainer width="99%" aspect={3}>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label={(entry) => entry.name}
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};
