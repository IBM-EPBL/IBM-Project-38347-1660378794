import React from "react";
import Background from "./Background";
import { MdCancel } from "react-icons/md";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateEmail } from "../../../comman";
import { url } from "../../../global";

const Login = ({ setShowAuth, setCurrentModel, setLoading }) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickHandler = () => {
    setShowAuth((prv) => !prv);
  };

  const loginHandler = async () => {
    if (!(email.length > 0) || !(password.length > 2)) {
      if (!validateEmail(email)) {
        toast("Please enter vaild email");
        return;
      }
      toast("Register number or dob must not empty");
      return;
    }
    setLoading(true);
    const res = await fetch(`${url}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: email,
        Password: password,
      }),
    });
    let response = await res.json();
    if (response.message == "Success!") {
      setLoading(false);
      router.reload();
    } else {
      setLoading(false);
      toast("email or dob miss match");
    }
  };

  return (
    <div className="screen">
      <ToastContainer style={{ width: "100vw", overflowX: "hidden" }} />
      <div className="screen__content">
        <MdCancel size={24} className="cancel" onClick={onClickHandler} />
        <form className="login">
          <div className="login__field">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login__input"
              placeholder="Email"
            />
          </div>
          <div className="login__field">
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login__input"
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            onClick={loginHandler}
            className="button login__submit"
          >
            <span className="button__text">Login</span>
          </button>
          <p className="switch">Don&apos;t have Account ?</p>
          <button
            type="button"
            style={{ marginTop: "50px" }}
            onClick={() => setCurrentModel("register")}
            className="button login__submit"
          >
            <span className="button__text">Register</span>
          </button>
        </form>
      </div>
      <Background />
    </div>
  );
};

export default Login;
