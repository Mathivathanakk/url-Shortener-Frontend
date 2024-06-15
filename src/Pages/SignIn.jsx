import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const SignIn = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const payload = { email, password };
  //handle the signin
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://url-shortener-backend-0olk.onrender.com/api/user/signin-user",
        payload
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        setToken(response.data.token)
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center flex-wrap mt-5">
      {/* signin start */}
      <div className="signin">
        <div className="m-5">
          <div className="text-center  fs-2 fw-semibold">
            Login to Your Account
          </div>
          <div className="text-center">
            Don't have an account ? <Link to="/">SignUp</Link>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="fs-5 fw-medium">
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password" className="fs-5 fw-medium">
              Password
            </label>
            <br />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-success w-100">
            Sign In
          </button>

          <Link
            to="/forgot-password"
            className="d-flex justify-content-end align-content-end p-2"
          >
            Forgot Password ?
          </Link>
        </form>
      </div>
      {/* signin end */}
    </div>
  );
};

export default SignIn;
