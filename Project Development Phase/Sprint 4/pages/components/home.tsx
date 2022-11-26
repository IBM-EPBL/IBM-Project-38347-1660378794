import React from "react";
import { Router, useRouter } from "next/router";
import Image from "next/image";
import mypic from "../assets/Image.png";
import LoginHolder from "../components/login/LoginHolder";

const HomeContainer = () => {
  const router = useRouter();
  let [showAuth, setShowAuth] = React.useState(false);

  return (
    <div className="container">
      {showAuth && <LoginHolder setShowAuth={setShowAuth} />}
      <div className="page">
        <nav className="navbar">
          {/* <ul>
            <li
              onClick={() => router.push("/chart")}
              style={{ color: "#551a8b", fontSize: "1.2rem" }}
            >
              Login
            </li>
          </ul> */}
        </nav>
        <div className="left">
          <h1 style={{ color: "#551a8b" }}>Manage Your Inventory</h1>
          <p className="para">
            The practice of good inventory management can identify trends, and
            guarantee your business will have the right stock in the right place
            at the right time.
          </p>
          <button onClick={() => setShowAuth((prv) => !prv)}>Login</button>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default HomeContainer;
