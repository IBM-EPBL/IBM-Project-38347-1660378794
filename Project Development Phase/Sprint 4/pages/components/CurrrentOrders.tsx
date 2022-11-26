import React from "react";
import { url } from "../../global";
import { useRouter } from "next/router";

const CurrrentOrders = ({
  stockFromUsers,
  setStockFromUsers,
  setUser,
}: {
  stockFromUsers: any;
  setStockFromUsers: any;
  setUser: any;
}) => {
  const router = useRouter();

  const acceptUser = async (id: string) => {
    const res = await fetch(`${url}/api/acceptuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    let response = await res.json();
    setStockFromUsers(response.stockFromUsers);

    setUser({ user: [response.user] });
    router.reload();
  };

  return (
    <div style={{ width: "100%", marginLeft: "1rem" }}>
      <h1>Current Orders</h1>
      <div className="currentOrders">
        {stockFromUsers?.length &&
          stockFromUsers.map((d: any) => (
            <div className="design-holder" key={d.orderId}>
              <p>{d.email}</p>
              <p>
                {d.Title} : <span>{d.count}</span>
              </p>
              <button
                onClick={() => acceptUser(d._id)}
                style={{ position: "inherit", transform: "none" }}
              >
                Accept
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CurrrentOrders;
