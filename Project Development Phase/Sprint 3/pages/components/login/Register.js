import React from "react";
import { BiArrowBack } from "react-icons/bi";
import Background from "./Background";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateEmail } from "../../../comman";
import { url } from "../../../global";

const Register = ({ setShowAuth, setCurrentModel, setLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("");

  const router = useRouter();

  const onClickHandler = async () => {
    if (!(email.length > 0) || !(password.length > 4) || !(Name.length > 3)) {
      if (!validateEmail(email)) {
        toast("Please enter vaild email");
        return;
      }
      toast("Register number or dob must not empty");
      return;
    }
    setLoading(true);
    const res = await fetch(`${url}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: email,
        Name,
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

  const registerHandler = () => {
    toast("REG closded");
  };

  return (
    <div className="screen">
      <ToastContainer style={{ width: "100vw", overflowX: "hidden" }} />
      <div className="screen__content">
        <form className="login">
          <BiArrowBack
            onClick={() => setCurrentModel("login")}
            color="#777"
            fontSize={22}
          />
          <MdCancel
            size={24}
            className="cancel"
            onClick={() => {
              setShowAuth((prv) => !prv);
            }}
          />

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
              type="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className="login__input"
              placeholder="Name"
            />
          </div>

          <div className="login__field">
            <input
              type="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login__input"
              placeholder="Password"
            />
          </div>

          <button
            type="button"
            style={{ marginTop: "50px" }}
            onClick={() => onClickHandler()}
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

export default Register;
