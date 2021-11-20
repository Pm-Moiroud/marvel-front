import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Cookies from "js-cookie";

import "./login.css";

const Login = ({ giveToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      const fetchData = async () => {
        const response = await axios.post("http://localhost:3001/user/login", {
          email: email,
          password: password,
        });

        giveToken(response.data.token);
        navigate("/");
      };
      fetchData();
    } catch (error) {
      if (error.response.status === 400) {
        console.log("Problem");
      }
    }
  };

  return (
    <div className="form-container">
      <h1>Se connecter</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Se connecter</button>
        <a href="https://www.lereacteur.io/" className="need-help ">
          Besoin d'aide ? Cliquez ici
        </a>
        <Link to="/signup">
          <span className="already-user">
            Tu n'as pas encore de compte ? Inscris-toi !
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
