import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Dashboard = ({ token }) => {
  const [resData, setResData] = useState([]);
  const [count, setCountData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
//fetching the data count of url created per day and month
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://url-shortener-backend-0olk.onrender.com/api/urlCount/day/month",
        { headers: { Authorization: token } }
      );

      if (response.status === 200) {
        setResData(response.data);
        setCountData(response.data.urllist);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="dashboard ">
      <h1 className="text-center p-5 ">
        <span className="title">URL SHORTENER</span>
      </h1>
      <div>
        <h2 className="text-center mt-5 ">
          <span className="dash">DASHBOARD</span>
        </h2>
      </div>

      <div className="container d-flex justify-content-center align-items-center flex-wrap mt-5 ">
        <div className="count w-75">
          <div className="d-flex justify-content-between align-content-between">
            <div className="text fs-3">URL SHORTEN PER DAY COUNT </div>
            <div>{resData.urlperday}</div>
          </div>
          <br />
          <div className="d-flex justify-content-between align-content-between">
            <div className="text fs-3">URL SHORTEN PER MONTH COUNT </div>
            <div>{resData.urlpermonth}</div>
          </div>
        </div>
      </div>
      
      <div>
        <div className="container d-flex flex-wrap  justify-content-center align-items-center   text-center">
          <div className="m-3">
        <div className="d-flex justify-content-between align-content-between">
          <div className="text-center m-2 ">
            <Link to="/shorturl" className="short btn text-black px-5">
              SHORT YOUR URL
            </Link>
          </div>
          <div className="text-center m-2">
        <Link to="/clickcounturl" className="short btn text-black px-5">
         COLLECTION
        </Link>
        </div>
        </div>
        </div>
        
</div>
      </div>
      
    </div>
  );
};

export default Dashboard;
