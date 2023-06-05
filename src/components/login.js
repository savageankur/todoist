import React, { useState } from "react";
import "../App.css";
export default function sign_in(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data.id.toString());
      setData(data.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="sign-in-form">
        <img src="" alt="" srcSet="" />
        <h1>Sign in</h1>
        <p>{data}</p>
        <form onSubmit={onFormSubmit}>
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
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}
