import React, { useState } from "react";

import "../App.css";
export default function Sign_Up(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    try {
      const response = await fetch(
        "https://to-do-manage.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const data = await response.json();
      console.log(data.id.toString());
      setData(data.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="sign-up-form">
        <img src="" alt="" srcSet="" />
        <h1>Sign Up Now</h1>
        <p>{data}</p>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            className="input-box"
            required
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            pattern="^[A-Za-z\d\-_\s]+$"
          />
          <input
            type="email"
            className="input-box"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input-box"
            required
            placeholder="Password"
            maxLength="20"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <button type="submit" className="signup-btn">
            Sign Up
          </button>
          <hr />
          <p className="or">OR</p>
          <br />
          <p>
            Do you already have an account?{" "}
            <button onClick={() => props.onClick(false)}>Sign in</button>
          </p>
        </form>
      </div>
    </>
  );
}
