import React from "react";
import { url } from "../../global";

interface Order {
  title: string;
  quantity: number;
}

const NormalUser = () => {
  const [request, setRequest] = React.useState<any>([]);
  const [order, setOrder] = React.useState<Order[]>([]);

  const onChangeHanlder = (label: string) => {
    var copyOrder = [...order];

    copyOrder.push({
      title: label,
      quantity: 5,
    });

    setOrder(copyOrder);
  };

  React.useEffect(() => {
    (async function callapi() {
      const res = await fetch(`${url}/api/myrequest`);
      let response = await res.json();
      setRequest(response.stock);
    })();
  }, []);

  const acceptUser = async (id: string) => {
    const res = await fetch(`${url}/api/accept`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    let response = await res.json();
    setRequest(response.stock);
  };

  const onClickHandler = async () => {
    const res = await fetch(`${url}/api/requestfromuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Stock: order,
      }),
    });
    let response = await res.json();
    if (response.message == "ok") {
      //   setCurrentStock(response.st);
      // setUser(response.user);
    } else {
    }
  };

  return (
    <div style={{ width: "100%", marginLeft: "1rem" }}>
      <h1>Current Stock requests</h1>
      <div className="currentOrders">
        {request.map((d: any) => (
          <div
            className="design-holder"
            style={{ backgroundColor: "rgb(15, 131, 171)" }}
            key={d._id}
          >
            <p>From Arunmani </p>
            <p>
              {d.Title} : <span>{d.count}</span>
            </p>
            <button
              style={{ position: "inherit", transform: "none" }}
              onClick={() => acceptUser(d._id)}
            >
              Accept
            </button>
          </div>
        ))}
      </div>

      <h1 style={{ marginTop: "50px" }}>Request Stock</h1>

      <div style={{ fontFamily: "monospace", width: "100%" }}>
        <label htmlFor="" style={{ color: "#777", fontFamily: "monospace" }}>
          Content
        </label>

        {["Toys", "Cloth", "Electronics", "Drinks", "Food", "Timber"].map(
          (d) => (
            <div key={d} className="holder">
              <input
                type="checkbox"
                name={d}
                id={d}
                onClick={() => onChangeHanlder(d)}
              />
              <label htmlFor={d}>{d}</label>
            </div>
          )
        )}

        <button
          style={{
            position: "inherit",
            transform: "none",
            marginTop: "30px",
            marginBottom: "50px",
          }}
          onClick={onClickHandler}
        >
          Request
        </button>
      </div>
    </div>
  );
};

export default NormalUser;
