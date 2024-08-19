import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../page/styling.css';

const Log_in = () => {
  const navigate = useNavigate();
  const [nid, set_nid] = useState("");
  const [email, set_email] = useState("");

  async function handel_submit(e) {
    e.preventDefault();
    sessionStorage.setItem("nid", nid);

    try {
      const response = await axios.post(`http://localhost:5000/db/vs/sign_up`, { nid, email });
      if (response.data === "password") {
        alert("Log in successfully ppppppp!!!");
        navigate("/log-in-home");
      } else if (response.data === "otp") {
        alert("Log in successfully ooo!!!");
        navigate("/log-in-new");
      }
    } catch (error) {
      alert("Log in failed: " + error.message);
    }

    set_nid("");
    set_email("");
  }

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="content-wrapper">
        <div className="login-box">
          <h2 className="welcome-text">التسجيل للمشاركة في الانتخابات</h2>
          <form className="login-form" onSubmit={handel_submit}>
            <div className="input-group">
              <label htmlFor="nationalId">الرقم الوطني</label>
              <input
                id="nationalId"
                name="nationalId"
                type="text"
                placeholder="أدخل الرقم الوطني"
                value={nid}
                onChange={(e) => { set_nid(e.target.value) }}
                className="input"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">البريد الإلكتروني</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={(e) => { set_email(e.target.value) }}
                className="input"
                required
              />
            </div>
            <button type="submit" className="login-button">
              تسجيل
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Log_in;
