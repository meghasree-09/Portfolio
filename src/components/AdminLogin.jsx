import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    console.log("Sending login request...");

    try {

      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          email,
          password
        }
      );

      console.log("Login response:", response.data);

      sessionStorage.setItem(
        "adminToken",
        response.data.token
      );

      navigate("/admin/dashboard");

    } catch (error) {

      console.error(
        "Login error:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
    <div className="admin-login-page">

      <div className="admin-login-card">

        <h1>Admin Login</h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button
            type="submit"
            className="primary-btn"
          >
            Sign In
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;