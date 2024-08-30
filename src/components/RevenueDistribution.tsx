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
  Ads: {
    label: "Ads",
    color: "hsl(var(--chart-2))",
  },
  Premium: {
    label: "Premium",
    color: "hsl(var(--chart-1))",
  },
  Merchandise: {
    label: "Merchandise",
    color: "hsl(var(--chart-3))",
  },
  Partnerships: {
    label: "Partnerships",
    color: "hsl(var(--chart-4))",
  },
  LiveEvents: {
    label: "Live Events",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function RevenueDistribution() {
  const id = "pie-interactive";
  const [activeRevenue, setActiveRevenue] = React.useState(
    data.revenueDistribution[0].source
  );

  const activeIndex = React.useMemo(
    () =>
      data.revenueDistribution.findIndex(
        (item) => item.source === activeRevenue
      ),
    [activeRevenue]
  );
  const months = React.useMemo(
    () => data.revenueDistribution.map((item) => item.source),
    []
  );

  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Revenue Distribution</CardTitle>
          <CardDescription>January - December 2024</CardDescription>
        </div>
        <Select value={activeRevenue} onValueChange={setActiveRevenue}>
          <SelectTrigger
            className="ml-auto h-8 w-[150px] rounded-lg pl-2.5"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select revenue" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {months.map((key) => {
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
              data={data.revenueDistribution}
              dataKey="amount"
              nameKey="source"
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
                          {data.revenueDistribution[
                            activeIndex
                          ].amount.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {data.revenueDistribution[activeIndex].source}
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
