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

export default function Bar({ user }: { user: any }) {
  let stockData = user?.user[0];

  let data: any[] = [];

  if (stockData) {
    data = [
      {
        label: "Available Stocks",
        data: [
          {
            primary: "Toys",
            secondary: stockData.Toys,
            radius: 1,
          },
          {
            primary: "Cloth",
            secondary: stockData.Cloth,
            radius: 1,
          },
          {
            primary: "Electronics",
            secondary: stockData.Electronics,
            radius: 1,
          },
          {
            primary: "Timber",
            secondary: stockData.Timber,
            radius: 1,
          },
          {
            primary: "Food",
            secondary: stockData.Food,
            radius: 1,
          },
          {
            primary: "Drinks",
            secondary: stockData.Drinks,
            radius: 1,
          },
        ],
      },
    ];
  }

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
          The Y-axis displays the total number of stocks with the admin and the
          X-axis illustrates the stock type. The graph demonstrates the stock
          details of the admin depending upon the transactions performed. This
          will facilitate the admin to have a clear and ease of knowledge about
          the product storage details
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
