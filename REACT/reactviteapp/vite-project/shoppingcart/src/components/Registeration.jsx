import React, { useState } from "react";

function Registration({regData}) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function getData(e) {
    e.preventDefault(); 

    const data = {
      name: name,
      email: email,
      password: password,
    };
    regData(data);
    // console.log(data); 
  }

  return (
    <div className="container mt-4">
      <h2>Registration Page</h2>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="nameInput"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button type="submit" onClick={getData} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;
