import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";

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
  streams: {
    label: "streams",
  },
  "Anti-Hero": {
    label: "Anti-Hero",
  },
  "As It Was": {
    label: "As It Was",
  },
  "Cruel Summer": {
    label: "Cruel Summer",
  },
  Flowers: {
    label: "Flowers",
  },
  "Last Night": {
    label: "Last Night",
  },
  "Dance Night": {
    label: "Dance Night",
  },
  Levitating: {
    label: "Levitating",
  },
  Sugar: {
    label: "Sugar",
  },
  "Shape of You": {
    label: "Shape of You",
  },
  Lights: {
    label: "Lights",
  },
} satisfies ChartConfig;

export function TopStreamedSongs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Streamed Songs</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="h-[150px] md:h-[300px] w-full"
        >
          <BarChart accessibilityLayer data={data.topStreamedSongs}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="songName"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="streams"
              strokeWidth={2}
              radius={8}
              activeIndex={2}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                );
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
