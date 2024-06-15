import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { id, token } = useParams();
  const navigate = useNavigate();
//handle the reset password
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        `https://url-shortener-backend-0olk.onrender.com/api/user/reset-password/${id}/${token}`,
        { password }
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
      {/* reset password start */}
      <div className="resetpassword">
        <div className="m-5">
          <div className="text-center  fs-2 fw-semibold">
            Reset Your Password
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fs-5 fw-medium">
              New Password
            </label>
            <input
              name="password"
              id="password"
              className="form-control"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Reset
          </button>
        </form>
      </div>
      {/* reset password end */}
    </div>
  );
};

export default ResetPassword;
