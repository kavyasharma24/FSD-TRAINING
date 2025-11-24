import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container mt-4">
      <h2>Login Page</h2>

      <form>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary mt-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
