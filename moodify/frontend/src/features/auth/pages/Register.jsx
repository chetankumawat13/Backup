import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="form-container">
      <h1>Register</h1>
      <form action="">
        <div className="input">
          <span>username</span>
          <input type="text" id="username" placeholder="Enter username" />
        </div>
        <div className="input">
            <span>email</span>
            <input type="email" placeholder="Enter email" id="email" />
        </div>
        <div className="input">
            <span>password</span>
            <input type="password" placeholder="Enter password" id="password" />
        </div>
        <button>submit</button>
        <p>Already have an account? <Link to='/login' >Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
