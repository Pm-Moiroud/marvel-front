import "./signup.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Signup = ({ giveToken }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      const fetchData = async () => {
        const response = await axios.post("http://localhost:3001/user/signup", {
          email: email,
          password: password,
          username: username,
        });
        giveToken(response.data.token);
        navigate("/");
        /*    Cookies.set("Token", response.data.token); */
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
      <h1>S'incrire</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          style={{ background: "#ffff" }}
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={{ background: "#ffff" }}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ background: "#ffff" }}
          type="Password"
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="checkbox">
          <input type="checkbox" />
          <div>Accepter les conditions générales </div>
        </div>
        <p className="terms-conditions">
          En m'inscrivant je confirme avoir lu et accepté les Termes et
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18
        </p>
        <span></span>
        <button className="connect">S'inscrire</button>
        <Link to="/login">
          <span className="already-user">
            Tu as déjà un compte ? Connecte-toi !
          </span>
        </Link>
      </form>
    </div>
  );
};
export default Signup;
