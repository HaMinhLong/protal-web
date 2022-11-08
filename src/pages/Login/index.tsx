// THIRD IMPORT
import React, { useState } from "react";
// PROJECT IMPORT
import "assets/scss/login.scss";
import useAuth from "hooks/useAuth";

const Index = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.SyntheticEvent) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    e.preventDefault();
    await login(username, password);
  };

  return (
    <section>
      <div className="box">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>

        <div className="container">
          <div className="form">
            <h2>Protal Website CMS</h2>
            <form onSubmit={(e) => handleLogin(e)}>
              <div className="inputBx">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  required
                />
                <span>Tài khoản</span>
                <i className="fas fa-user-circle"></i>
              </div>
              <div className="inputBx password">
                <input
                  id="password-input"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span>Mật khẩu</span>
                <i className="fas fa-key"></i>
              </div>

              <div className="inputBx">
                <button type="submit">
                  {loading ? "Loading..." : "Đăng nhập"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
