import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const UrlClickList = ({ token }) => {
  const [count, setCountData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
//fetching the data of all url created 
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://url-shortener-backend-0olk.onrender.com/api/urlCount/day/month",
        { headers: { Authorization: token } }
      );

      if (response.status === 200) {
        setCountData(response.data.urllist);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    // created url
    <div className="createdurl">
      <div className="container d-flex flex-wrap  justify-content-center align-items-center   text-center">
        <div className="m-3">
          <div className="d-flex justify-content-between align-content-between">
            <div className="text-center m-2 ">
              <Link to="/shorturl" className="short btn text-black px-5">
                SHORT YOUR URL
              </Link>
            </div>
            <div className="text-center m-2">
              <Link to="/dashboard" className="short btn text-black px-5">
                DASHBOARD
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="original">
        <div className="tablescroll ">
          <h2 className="text-center fw-bolder title">MY COLLECTION</h2>
          <table className="table table-responsive table-bordered">
            <thead>
              <tr>
                <th scope="col" className="text-center fs-2">
                  Original URL
                </th>
                <th scope="col" className="text-center fs-2">
                  Shorten URL
                </th>
              </tr>
            </thead>
            <tbody>
              {count.map((ele, i) => {
                return (
                  <tr key={i}>
                    <td className="text-center text-black">
                      <a
                        href={ele.fullurl}
                        target="_blank"
                        className="text-black"
                      >
                        {ele.fullurl}
                      </a>
                    </td>
                    <td className="text-center">
                      <a
                        href={`https://url-shortener-backend-0olk.onrender.com/api/${ele.shorturl}`}
                        target="_blank"
                      >
                        {ele.shorturl}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UrlClickList;
