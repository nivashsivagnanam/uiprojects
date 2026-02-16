import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
   //arrow function: handleLogin, takes event 
  const handleLogin = (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }

    // Dummy credentials
    if (email === "admin@test.com" && password === "Admin@123") {
      localStorage.setItem("isAuth", "true");
      toast.success("Login successful");
      navigate("/dashboard");
    } else {
      toast.error("Invalid login");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
      <h1 className="login-title">Signin</h1>
       <h2 className="login-title1"> Welcome Back</h2>
      <p> Sign in to access you dashboard</p>

      <form onSubmit={handleLogin}>
        <input
          className="login_input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          className="login_input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button className ="login-button" type="submit">Sign In</button>
      </form>
      </div>
    </div>
  );
}

export default Login;
