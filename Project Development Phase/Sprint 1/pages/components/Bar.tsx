import ResizableBox from "./ResizableBox";
import React from "react";
import { AxisOptions } from "react-charts";
import dynamic from "next/dynamic";

const Chart: any = dynamic(
  () => import("react-charts").then((mod) => mod.Chart),
  {
    ssr: false,
  }
);

export default function Bar() {
  let data = [
    {
      label: "Available Stocks",
      data: [
        {
          primary: "Toys",
          secondary: 32,
          radius: 1,
        },
        {
          primary: "Cloth",
          secondary: 46,
          radius: 1,
        },
        {
          primary: "Electronics",
          secondary: 70,
          radius: 1,
        },
        {
          primary: "Timber",
          secondary: 3,
          radius: 1,
        },
        {
          primary: "Food",
          secondary: 46,
          radius: 1,
        },
        {
          primary: "Drinks",
          secondary: 70,
          radius: 1,
        },
      ],
    },
  ];

  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        padding: "2%",
        boxSizing: "border-box",
      }}
    >
      <ResizableBox>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </ResizableBox>

      <div
        style={{
          margin: "10px 0",
          color: "#777",
          lineHeight: "1.5",
          marginLeft: "30px",
          fontFamily: "monospace",
        }}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          nesciunt accusamus accusantium repellat a! Neque inventore velit ea?
          Unde quae porro ex commodi illum consequatur autem adipisci obcaecati,
          praesentium quibusdam!
        </p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "15px",
              margin: "10px 0",
              height: "15px",
              borderRadius: "50%",
              backgroundColor: "#0f83ab",
            }}
          ></div>
          <p style={{ color: "#777", marginLeft: "5px" }}>Number of Stock</p>
        </div>
      </div>
    </div>
  );
}

// ["#a2d925","#53cfc9","#fd6b6b","#0f83ab","#decf3f","#decf3f"]
