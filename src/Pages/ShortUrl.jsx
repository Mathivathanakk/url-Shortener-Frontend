import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const ShortUrl = ({ token }) => {
  const [fullurl, setFullurl] = useState("");
  const [resData, setResData] = useState("");
  //to create the shorturl and redirecting to the web page
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://url-shortener-backend-0olk.onrender.com/api/url",
        { fullurl },
        { headers: { Authorization: token } }
      );

      const directurl = `https://url-shortener-backend-0olk.onrender.com/api/${response.data.urldetails.shorturl}`;
      if (response.status === 200) {
        setResData(directurl);
        toast.success(response.data.message);
      }

      //console.log(directurl);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="shorturl">
      <h1 className="text-center p-5 ">
        <span className="title">URL SHORTENER</span>
      </h1>
      <div className="container d-flex flex-wrap  justify-content-center align-items-center">
        <div className="url">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="text-center">
                <label htmlFor="fullurl" className="fs-1 fw-medium ">
                  URL
                </label>
              </div>
              <br />
              <input
                type="text"
                id="fullurl"
                name="fullurl"
                placeholder="paste your url"
                className="fs-4"
                required
                value={fullurl}
                onChange={(e) => setFullurl(e.target.value)}
              />
            </div>
            <br />
            <div className="text-center">
              <button type="submit" className="btn short px-5">
                Short Url
              </button>
            </div>
          </form>
        </div>
      </div>
      <br />
      <div className="container d-flex flex-wrap justify-content-center align-items-center">
        <div className="url1">
          <div className="text-center">
            <h2> SHORT URL </h2>
          </div>
          <div className="text-center fs-4">
            {resData && (
              <a href={resData} target="_blank" className="text-black">
                {resData}
              </a>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="container d-flex flex-wrap  justify-content-center align-items-center   text-center">
          <div className="m-3">
        <div className="d-flex justify-content-between align-content-between">
          <div className="text-center m-2 ">
            <Link to="/dashboard" className="short btn text-black px-5">
             DASHBOARD
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

export default ShortUrl;
