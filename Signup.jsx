import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Userdata from "../../Assests/Userdata";

import "./Signup.scss";

function Signup() {
  let history = useHistory();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const submitHandler = async (event) => {
    event.preventDefault();
    let valid = false;
    console.log("submitting");
    console.log(email, password);
    let useremail = email;
    let userpassword = password;
    const regsiterdata = {
      email: useremail,
      password: userpassword,
    };
    Userdata.data.push(regsiterdata);
    console.log(Userdata);
  };

  return (
    <React.Fragment>
      <div className="login-container">
        <div className="container">
          <div className="card login-card" style={{ width: "350px" }}>
            <div className="card-title"> Register your account</div>
            <p className="text-center text-danger">{error}</p>
            <form className="login-form" onSubmit={(e) => submitHandler(e)}>
              <div className="mb-3 login-email">
                <label className="form-label">
                  Email address <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Password <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn  login-btn">
                Register
              </button>
            </form>
          </div>
          <div className="login-not">Not a member yet?</div>
          <div className="signup-login-btn">
            <button
              type="submit"
              className="btn  register-btn"
              onClick={() => {
                history.push("/login");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Signup;
