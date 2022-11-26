import { url } from "../../global";
import React from "react";

interface Order {
  title: string;
  quantity: number;
}

const SendMail = ({
  setUser,
  setCurrentStock,
}: {
  setUser: any;
  setCurrentStock: any;
}) => {
  const [order, setOrder] = React.useState<Order[]>([]);
  const [email, setEmail] = React.useState<String>("");

  const onChangeHanlder = (label: string) => {
    var copyOrder = [...order];

    copyOrder.push({
      title: label,
      quantity: 5,
    });

    setOrder(copyOrder);
  };

  const onClickHandler = async () => {
    const res = await fetch(`${url}/api/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        Stock: order,
      }),
    });
    let response = await res.json();
    if (response.message == "ok") {
      setCurrentStock(response.st);
      // setUser(response.user);
    } else {
    }
  };

  return (
    <div
      style={{
        width: "100%",
        // height: "100vh",
        marginBottom: "100px",
        // marginTop: "50px",
      }}
    >
      <h1 style={{ color: "#777", fontFamily: "monospace" }}>
        Request for stock
      </h1>

      <div style={{ fontFamily: "monospace" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <label
            htmlFor="email"
            style={{ fontSize: "1rem", color: "#777", marginBottom: "0.5rem" }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email as any}
            onChange={(e) => setEmail(e.target.value as string)}
            style={{
              width: "100%",
              borderRadius: "5px",
              outline: "none",
              border: "1px solid #0f83ab",
              padding: "0.5rem 1rem",
            }}
          />
        </div>
      </div>
      <label htmlFor="" style={{ color: "#777", fontFamily: "monospace" }}>
        Content
      </label>

      {["Toys", "Cloth", "Electronics", "Drinks", "Food", "Timber"].map((d) => (
        <div key={d} className="holder">
          <input
            type="checkbox"
            name={d}
            id={d}
            onClick={() => onChangeHanlder(d)}
          />
          <label htmlFor={d}>{d}</label>
        </div>
      ))}

      <button
        style={{
          position: "inherit",
          marginTop: "43px",
        }}
        onClick={onClickHandler}
      >
        Request
      </button>
    </div>
  );
};

export default SendMail;
