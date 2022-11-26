import React, { useState } from "react";
import HomeContainer from "./components/home";
import { url } from "../global";
import Area from "./components/Area";
import Bar from "./components/Bar";
import CurrrentStockRequests from "./components/currentRequests";
import CurrrentOrders from "./components/CurrrentOrders";

import Line from "./components/Line";

import SendMail from "./components/SendMail";
import NormalUser from "./components/NormalUser";

const Home = ({
  status,
  admin,
  user,
}: {
  status: any;
  admin: any;
  user: any;
}) => {
  const [userData, setUser] = useState(user);
  const [stock, setCurrentStock] = useState(userData?.stock);
  const [stockFromUsers, setStockFromUsers] = useState(
    userData?.stockFromUsers
  );

  // console.log(user);
  if (!status) {
    return <HomeContainer />;
  }

  if (!admin) {
    return <NormalUser />;
  }

  const components = [
    ["Supply", Area],

    ["Demand", Line],
  ];

  return (
    <div>
      <h1
        style={{
          marginLeft: "4%",
          paddingLeft: "0.5rem",
          color: "#777",
          fontFamily: "monospace",
          marginBottom: "-9px",
        }}
      >
        Total Stocks
      </h1>
      <Bar user={userData} />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0 2rem",
        }}
      >
        <SendMail setUser={setUser} setCurrentStock={setCurrentStock} />
        <CurrrentStockRequests req={stock} />
        <CurrrentOrders
          stockFromUsers={stockFromUsers}
          setStockFromUsers={setStockFromUsers}
          setUser={setUser}
        />
      </div>

      {components.map(([label, Comp]) => {
        return (
          <div key={label + ""}>
            <h1
              style={{
                marginLeft: "4%",
                paddingLeft: "0.5rem",
                color: "#777",
                fontFamily: "monospace",
                marginBottom: "-9px",
              }}
            >
              {label as any}
            </h1>
            <div>
              <Comp />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

export async function getServerSideProps(ctx: any) {
  const jwt = ctx.req.cookies.OursiteJWT;

  if (jwt) {
    const data = await fetch(`${url}/api/dashboard`, {
      headers: {
        method: "GET",
        "Content-Type": "application/json",
        Authorization: jwt,
      },
    });
    const user = await data.json();

   
    if (!user.length) {
      return {
        props: {
          status: false,
          admin: false,
        },
      };
    }

    if (user.user[0].admin === "no") {
      return {
        props: {
          status: true,
          admin: false,
          user,
        },
      };
    } else {
      return {
        props: {
          status: true,
          admin: true,
          user,
        },
      };
    }
  }
  return {
    props: {
      status: false,
      admin: false,
    },
  };
}
