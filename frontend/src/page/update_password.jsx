import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../page/styling.css';

const Update_password = () => {
  const navigate = useNavigate();
  const [nid, set_nid] = useState(sessionStorage.getItem("nid"));
  const [pass, set_pass] = useState("");

  async function handel_submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:3001/db/vs/new-pass`, { nid, pass })
        .catch(err => {
          console.error("Error details:", err.response ? err.response.data : err)
        });

      alert("Log in successfully !!!");
      navigate("/log-in-home");

    } catch (error) {
      alert("Log in failed: " + error.message);
    }

    set_pass("");
  }

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="content-wrapper">
        <div className="login-box">
          <h2 className="welcome-text">كلمة مرور جديدة</h2>
          <form className="login-form" onSubmit={handel_submit}>
            <div className="input-group">
              <div className="password-input">
                <input
                  id="nationalId"
                  name="nationalId"
                  type="text"
                  placeholder="أدخل كلمة مرور جديدة"
                  value={pass}
                  onChange={(e) => { set_pass(e.target.value) }}
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

export default Update_password;
