import * as React from "react";
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { data } from "@/data/data";

const chartConfig = {
  "13-17": { label: "13-17", color: "hsl(var(--chart-2))" },
  "18-24": { label: "18-24", color: "hsl(var(--chart-1))" },
  "25-34": { label: "25-34", color: "hsl(var(--chart-3))" },
  "35-44": { label: "35-44", color: "hsl(var(--chart-1))" },
  "45+": { label: "45+", color: "hsl(var(--chart-4))" },
} satisfies ChartConfig;

export function AgeGroups() {
  const id = "age-groups-bar";

  return (
    <Card data-chart={id} className="flex flex-col w-full">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Age Groups Distribution</CardTitle>
          <CardDescription>User demographics by age</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-4">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="w-full h-[350px]"
        >
          <ResponsiveContainer width="100%" height="100%" className="mt-5">
            <BarChart data={data.userDemographics.ageGroups}>
              <XAxis dataKey="group" />
              <YAxis dataKey="percentage" tickLine={false}/>
              <Tooltip
                content={<ChartTooltipContent />}
                cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
              />
              <Bar dataKey="percentage" fill="hsl(var(--chart-1))" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
