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

export default function Line() {
  let data = [
    {
      label: "Food",
      data: [
        {
          primary: new Date("2022-03-01"),
          secondary: 33,
          radius: 1,
        },
        {
          primary: new Date("2022-03-02"),
          secondary: 25,
          radius: 1,
        },
        {
          primary: new Date("2022-03-03"),
          secondary: 61,
          radius: 1,
        },
        {
          primary: new Date("2022-03-04"),
          secondary: 40,
          radius: 1,
        },
        {
          primary: new Date("2022-03-05"),
          secondary: 17,
          radius: 1,
        },
        {
          primary: new Date("2022-03-06"),
          secondary: 79,
          radius: 1,
        },
        {
          primary: new Date("2022-03-07"),
          secondary: 71,
          radius: 1,
        },
        {
          primary: new Date("2022-03-08"),
          secondary: 64,
          radius: 1,
        },
        {
          primary: new Date("2022-03-09"),
          secondary: 6,
          radius: 1,
        },
        {
          primary: new Date("2022-03-10"),
          secondary: 87,
          radius: 1,
        },
      ],
    },
    {
      label: "Drinks",
      data: [
        {
          primary: new Date("2022-03-01"),
          secondary: 61,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-02"),
          secondary: 34,
          radius: 1,
        },
        {
          primary: new Date("2022-03-03"),
          secondary: 3,
          radius: 1,
        },
        {
          primary: new Date("2022-03-04"),
          secondary: 38,
          radius: 1,
        },
        {
          primary: new Date("2022-03-05"),
          secondary: 24,
          radius: 1,
        },
        {
          primary: new Date("2022-03-06"),
          secondary: 50,
          radius: 1,
        },
        {
          primary: new Date("2022-03-07"),
          secondary: 78,
          radius: 1,
        },
        {
          primary: new Date("2022-03-08"),
          secondary: 58,
          radius: 1,
        },
        {
          primary: new Date("2022-03-09"),
          secondary: 11,
          radius: 1,
        },
        {
          primary: new Date("2022-03-10"),
          secondary: 98,
          radius: 1,
        },
      ],
    },
    {
      label: "toys",
      data: [
        {
          primary: new Date("2022-03-01"),
          secondary: 71,
          radius: 1,
        },
        {
          primary: new Date("2022-03-02"),
          secondary: 11,
          radius: 1,
        },
        {
          primary: new Date("2022-03-03"),
          secondary: 14,
          radius: 1,
        },
        {
          primary: new Date("2022-03-04"),
          secondary: 73,
          radius: 1,
        },
        {
          primary: new Date("2022-03-05"),
          secondary: 25,
          radius: 1,
        },
        {
          primary: new Date("2022-03-06"),
          secondary: 9,
          radius: 1,
        },
        {
          primary: new Date("2022-03-07"),
          secondary: 84,
          radius: 1,
        },
        {
          primary: new Date("2022-03-08"),
          secondary: 64,
          radius: 1,
        },
        {
          primary: new Date("2022-03-09"),
          secondary: 17,
          radius: 1,
        },
        {
          primary: new Date("2022-03-10"),
          secondary: 59,
          radius: 1,
        },
      ],
    },
    {
      label: "cloth",
      data: [
        {
          primary: new Date("2022-03-01"),
          secondary: 25,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-02"),
          secondary: 93,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-03"),
          secondary: 23,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-04"),
          secondary: 71,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-05"),
          secondary: 17,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-06"),
          secondary: 81,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-07"),
          secondary: 20,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-08"),
          secondary: 7,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-09"),
          secondary: 25,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-10"),
          secondary: 18,
          radius: undefined,
        },
      ],
    },
    {
      label: "Timber",
      data: [
        {
          primary: new Date("2022-03-01"),
          secondary: 98,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-02"),
          secondary: 8,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-03"),
          secondary: 74,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-04"),
          secondary: 34,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-05"),
          secondary: 79,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-06"),
          secondary: 3,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-07"),
          secondary: 76,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-08"),
          secondary: 86,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-09"),
          secondary: 34,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-10"),
          secondary: 43,
          radius: undefined,
        },
      ],
    },

    {
      label: "Electronics",
      data: [
        {
          primary: new Date("2022-03-01"),
          secondary: 44,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-02"),
          secondary: 72,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-03"),
          secondary: 10,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-04"),
          secondary: 64,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-05"),
          secondary: 15,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-06"),
          secondary: 69,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-07"),
          secondary: 23,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-08"),
          secondary: 41,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-09"),
          secondary: 94,
          radius: undefined,
        },
        {
          primary: new Date("2022-03-10"),
          secondary: 1,
          radius: undefined,
        },
      ],
    },
  ];

  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as unknown as Date,
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

      <div style={{ margin: "0 2%" }}>
        {[
          {
            color: "#a2d925",
            name: "Timber",
          },
          {
            color: "#53cfc9",
            name: "Cloth",
          },
          {
            color: "#fd6b6b",
            name: "Toys",
          },
          {
            color: "#0f83ab",
            name: "Cloth",
          },
          {
            color: "#53cfc9",
            name: "Electronics",
          },
          {
            color: "#faa43a",
            name: "Drinks",
          },
        ].map((d, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "15px",
                margin: "10px 0",
                height: "15px",
                borderRadius: "50%",
                backgroundColor: d.color,
              }}
              key={i}
            ></div>
            <p style={{ color: "#777", marginLeft: "5px" }}>{d.name}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          margin: "10px 0",
          color: "#777",
          lineHeight: "1.5",
          fontFamily: "monospace",
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
        nesciunt accusamus accusantium repellat a! Neque inventore velit ea?
        Unde quae porro ex commodi illum consequatur autem adipisci obcaecati,
        praesentium quibusdam!
      </div>
    </div>
  );
}
