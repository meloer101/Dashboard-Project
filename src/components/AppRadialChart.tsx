import {
  RadialBar,
  RadialBarChart,
  Label,
  PolarRadiusAxis,
  PolarAngleAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";

import { VENDOR_BREAKDOWN } from "@/constants";

const chartConfig = {
  monitored: {
    label: "Total monitored",
    color: "var(--chart-1)",
  },
  limit: {
    label: "Available limit",
    color: "var(--color-secondary)",
  },
} satisfies ChartConfig;

export const AppRadialChart = () => {
const totalLimits = VENDOR_BREAKDOWN[0].monitored +
VENDOR_BREAKDOWN[0].limit;

  return (
    <ChartContainer config={chartConfig}>
      <RadialBarChart
        data={VENDOR_BREAKDOWN}
        innerRadius={90}
        outerRadius={140}
        cy={104}
        startAngle={0}
        endAngle={180}
      >
        <RadialBar
          dataKey="limit"
          stackId="a"
          fill="var(--color-limit)"
          cornerRadius={20}
          className='strokeptransparent stroke-2'
        />
        <RadialBar
          dataKey="monitored"
          stackId="a"
          fill="var(--color-monitored)"
          cornerRadius={20}
          className="stroke-transparent stroke-2"
        />

        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label  
           />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
};
