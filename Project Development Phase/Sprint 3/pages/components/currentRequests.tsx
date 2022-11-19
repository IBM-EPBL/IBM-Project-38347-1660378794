import React from "react";

const CurrrentStockRequests = ({ req }: { req: any }) => {
  return (
    <div style={{ width: "100%", marginLeft: "1rem" }}>
      <h1>Current Stock requests</h1>
      <div className="currentOrders">
        {req?.length &&
          req.map((d: any) => (
            <div
              className="design-holder"
              style={{ backgroundColor: "rgb(15, 131, 171)" }}
              key={d._id}
            >
              <p>{d.email}</p>
              <p>
                {d.Title} : <span>{d.count}</span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CurrrentStockRequests;
