"use client";

import { MoreHorizontal, Calendar, GraduationCap } from "lucide-react";
import { RadialBar, RadialBarChart, PolarAngleAxis, Label } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { name: "attendance", value: 80, fill: "var(--color-present)" },
];

const chartConfig = {
  present: {
    label: "Present",
    color: "#D1D5FF", // Light Purple/Lavender
  },
  absent: {
    label: "Absent",
    color: "#FDE68A", // Soft Yellow
  },
} satisfies ChartConfig;

export function AttendanceCard() {
  return (
    <Card className="w-full max-w-sm rounded-[32px] border-none shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-2xl font-medium">Attendance</CardTitle>
        <MoreHorizontal className="h-5 w-5 text-muted-foreground cursor-pointer" />
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Legend */}
        <div className="flex justify-between px-2">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#D1D5FF]" />
            <span className="text-sm text-muted-foreground">Present</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#FDE68A]" />
            <span className="text-sm text-muted-foreground">Absent</span>
          </div>
        </div>

        {/* Chart Section */}
        <div className="flex justify-center py-4">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square w-full max-w-[200px]"
          >
            <RadialBarChart
              data={chartData}
              startAngle={90}
              endAngle={450}
              innerRadius={70}
              outerRadius={100}
            >
              {/* Background Bar (The "Absent" part) */}
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
              />
              <RadialBar
                background={{ fill: "#FDE68A" }}
                dataKey="value"
                cornerRadius={0}
              />
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
                          className="fill-foreground text-4xl font-semibold"
                        >
                          80%
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </RadialBarChart>
          </ChartContainer>
        </div>

        {/* Selectors */}
        {/* <div className="grid grid-cols-2 gap-3">
          <Select defaultValue="april-2023">
            <SelectTrigger className="bg-slate-50 border-none h-11 rounded-xl">
              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="april-2023">April 2023</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="10th">
            <SelectTrigger className="bg-slate-50 border-none h-11 rounded-xl">
              <GraduationCap className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10th">Class 10th</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
      </CardContent>
    </Card>
  );
}
