import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forgotpassword = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
//handle the forgot password
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://url-shortener-backend-0olk.onrender.com/api/user/forgot-password",
        { email }
      );
      if (response.status === 200) {
        toast.success(response.data.message);
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center flex-wrap mt-5">
      {/* forgot password start */}
      <div className="forgotpassword">
        <div className="m-5">
          <div className="text-center  fs-2 fw-semibold">Forgot Password</div>
          <div className="text-center">
            Enter your email and we'll send you a link to reset your password
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="form-label fs-5 fw-medium">
              Email
            </label>
            <input
              name="email"
              id="email"
              className="form-control"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-success w-100 ">
            Verify
          </button>
        </form>
        <div>
          <div className="text-center m-3">
            Back to <Link to="/signin">SignIn</Link>
          </div>
        </div>
      </div>
      {/* forgotpassword end */}
    </div>
  );
};

export default Forgotpassword;
