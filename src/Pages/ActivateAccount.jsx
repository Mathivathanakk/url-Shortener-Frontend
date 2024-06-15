import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ActivateAccount = () => {
  const [Verified, setverified] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  //activating account by id
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `https://url-shortener-backend-0olk.onrender.com/api/user/activate-account/${id}`
      );
      if (response) {
        setverified(true);
        toast.success(response.data.message);
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setverified(false);
    }
  };

  return (
    // ActivateAccount
    <div className="container d-flex justify-content-center align-items-center flex-wrap mt-5">
      <div className="activateaccount">
        <div className="m-5">
          <h2 className="text-center  fs-2 fw-semibold">Verify it's you</h2>
        </div>
        <div className="text-center fw-bold">
          We would like to confirm the referenced account is yours.
        </div>
        <div className="text"> please press Continue</div>
        <br />
        <br />
        <button
          type="submit"
          className="btn btn-primary w-100"
          onClick={handleSubmit}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ActivateAccount;
