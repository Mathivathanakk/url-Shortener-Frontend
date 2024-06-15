import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const payload = { firstname, lastname, email, password };
//handle the signup 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const response= await axios.post("https://url-shortener-backend-0olk.onrender.com/api/user/signup-user", payload);
      if (response.status === 200) {
        toast.success(response.data.message);
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    setFirstname("")
    setLastname("")
    setEmail("")
    setPassword("")
  };

  return (
    <div className="container d-flex justify-content-center align-items-center flex-wrap mt-5">
      {/* signup start */}
      <div className="register">
        <div className="m-5">
          <div className="text-center  fs-2 fw-semibold">
            Create Your Account
          </div>
          <div className="text-center">
            Have an account ? <Link to="/signin">SignIn</Link>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname" className="fs-5 fw-medium">
              FirstName
            </label>
            <br />
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Enter your First Name"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="lastname" className="fs-5 fw-medium">
              LastName
            </label>
            <br />
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Enter your Last Name"
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <br />
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
          <button type="submit" className="btn btn-success w-100 ">
            Sign Up
          </button>
        </form>
      </div>
      {/* signup end */}
    </div>
  );
};

export default SignUp;
