import React from "react";
import Loader from "../Loader/Loader";
import Login from "./Login";
import Register from "./Register";

const LoginHolder = ({ setShowAuth }) => {
  const [currentScroll, setCurrentScroll] = React.useState(0);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      let scroll = window?.scrollY;
      setCurrentScroll(scroll);
    });
  }

  const [currentModel, setCurrentModel] = React.useState("login");
  const [loading, setLoading] = React.useState(false);

  return (
    <div
      className="loginHolder"
      style={{ top: currentScroll, width: "100%", height: "100%" }}
    >
      {loading && <Loader />}
      {/* <Loader /> */}
      {currentModel === "login" ? (
        <Login
          setLoading={setLoading}
          setShowAuth={setShowAuth}
          setCurrentModel={setCurrentModel}
        />
      ) : (
        <Register
          setLoading={setLoading}
          setShowAuth={setShowAuth}
          setCurrentModel={setCurrentModel}
        />
      )}
    </div>
  );
};

export default LoginHolder;
