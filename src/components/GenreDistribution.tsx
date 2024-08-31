import { Bar, BarChart, CartesianGrid,XAxis, YAxis } from "recharts";

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { data } from "@/data/data";

const chartConfig = {
  percentage: {
    label: "Percentage",
  },
} satisfies ChartConfig;

export function GenreDistribution() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Genre Distribution</CardTitle>
        <CardDescription>User distribution by genre</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="h-[350px] w-full"
        >
          <BarChart layout="vertical" data={data.genreDistribution} margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
            <CartesianGrid horizontal={false} />
            <XAxis type="number" tickFormatter={(value) => `${value}%`} />
            <YAxis dataKey="genre" type="category" width={80} tickLine={false} fontSize={12} />
            <ChartTooltip
              cursor={{ fill: "transparent" }}
              content={<ChartTooltipContent />}
            />
            <Bar
              dataKey="percentage"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
