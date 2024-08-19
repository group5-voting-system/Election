import React, { useState, useEffect } from 'react';
import { LogIn } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../page/styling.css';

const Log_in_new = () => {
  const navigate = useNavigate();
  const [nid, set_nid] = useState(sessionStorage.getItem("nid"));
  const [email, set_email] = useState("");
  const [otp, set_otp] = useState("");
  const [user, set_user] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/db/vs/user`, { nid })
      .then((res) => { set_user(res.data) })
      .catch((err) => console.log(err))
  }, []);

  async function handel_submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:5000/db/vs/log-in-new`, { nid, otp });
      if (response.data === "matched") {
        alert("Log in successfully !!!");
        navigate("/update-pass");
      } else {
        alert("something wrong !!!");
      }
    } catch (error) {
      alert("Log in failed: " + error.message);
    }

    set_nid("");
    set_email("");
    set_otp("");
  }

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="content-wrapper">
        <div className="login-box">
          <h2 className="welcome-text">التسجيل للمشاركة في الانتخابات</h2>
          <h3 className="welcome-text">تم ارسال كلمة مرور مؤقتة على ايملك</h3>
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
                  onChange={(e) => { set_nid(e.target.value) }}
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
                value={user.Email}
                onChange={(e) => { set_email(e.target.value) }}
                className="input"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="otp">كلمة المرور المؤقتة</label>
              <div className="password-input">
                <input
                  id="otp"
                  name="otp"
                  type="password"
                  placeholder="أدخل كلمة المرور المؤقتة"
                  value={otp}
                  onChange={(e) => { set_otp(e.target.value) }}
                  className="input"
                  required
                />
                <LogIn className="eye-icon" size={20} />
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

export default Log_in_new;
