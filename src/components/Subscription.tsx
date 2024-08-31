import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { data } from "@/data/data";

const chartConfig = {
  percentage: {
    label: "Percentage",
    color: "hsl(var(--chart-5))",
  },
  Free: {
    label: "Free",
    color: "hsl(var(--chart-2))",
  },
  Premium: {
    label: "Premium",
    color: "hsl(var(--chart-1))",
  },
  Family: {
    label: "Family",
    color: "hsl(var(--chart-3))",
  },
  Student: {
    label: "Student",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function Subscription() {
  const id = "pie-interactive";
  const [activeTier, setActiveTier] = React.useState(
    data.subscriptionTiers[0].tier
  );

  const activeIndex = React.useMemo(
    () => data.subscriptionTiers.findIndex((item) => item.tier === activeTier),
    [activeTier]
  );
  const tiers = React.useMemo(
    () => data.subscriptionTiers.map((item) => item.tier),
    []
  );

  return (
    <Card data-chart={id} className="flex flex-col w-full">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Subscription Tiers</CardTitle>
          <CardDescription>User distribution by tier</CardDescription>
        </div>
        <Select value={activeTier} onValueChange={setActiveTier}>
          <SelectTrigger
            className="ml-auto h-8 w-[150px] rounded-lg pl-2.5"
            aria-label="Select a tier"
          >
            <SelectValue placeholder="Select tier" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {tiers.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig];

              if (!config) {
                return null;
              }

              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{
                        backgroundColor: config.color,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[350px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data.subscriptionTiers}
              dataKey="percentage"
              nameKey="tier"
              innerRadius={80}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {data.subscriptionTiers[
                            activeIndex
                          ].users.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {data.subscriptionTiers[activeIndex].tier}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
