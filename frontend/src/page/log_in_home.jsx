import React, { useState } from 'react';
import { LogIn, Eye } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../page/styling.css';

const Log_in_home = () => {
  const navigate = useNavigate();
  const [nid, set_nid] = useState(sessionStorage.getItem("nid"));
  const [email, set_email] = useState("");
  const [pass, set_pass] = useState("");

  async function handel_submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:5000/db/vs/log-in`, { nid, pass });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        alert("Log in successfully !!!");
        navigate('/');
      } else {
        alert("Login failed: No token received");
      }
    } catch (error) {
      alert("Log in failed: " + error.message);
    }
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
              <div className="password-input">
                <input
                  id="nationalId"
                  name="nationalId"
                  type="text"
                  placeholder="أدخل الرقم الوطني"
                  value={nid}
                  className="input"
                  required
                />
                <LogIn className="eye-icon" size={20} />
              </div>
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
            <div className="input-group">
              <label htmlFor="password">كلمة المرور</label>
              <div className="password-input">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="أدخل كلمة المرور"
                  value={pass}
                  onChange={(e) => { set_pass(e.target.value) }}
                  className="input"
                  required
                />
                <LogIn className="eye-icon" size={20} />
                <button type="button" className="eye-icon">
                  <Eye size={20} />
                </button>
              </div>
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

export default Log_in_home;
