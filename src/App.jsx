import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Forgotpassword from "./Pages/Forgotpassword";
import ResetPassword from "./Pages/ResetPassword";
import ActivateAccount from "./Pages/ActivateAccount";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./Pages/Dashboard";
import ShortUrl from "./Pages/ShortUrl";
import UrlClickList from "./Pages/UrlClickList";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  const [token, setToken] = useState("");
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <div>
          <ToastContainer />
        </div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn setToken={setToken} />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword token={token} />}
          />
          <Route path="/activate-account/:id" element={<ActivateAccount />} />
          <Route path="/dashboard" element={<Dashboard token={token}/>} />
          <Route path='/shorturl' element={<ShortUrl token={token}/>}/>
          <Route path='/clickcounturl'element={<UrlClickList token={token}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
