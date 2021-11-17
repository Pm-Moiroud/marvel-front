import "./App.css";

import Header from "./components/header/Header";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Home from "./Pages/Home/Home";
import Personnages from "./Pages/Personnages/Personnages";
import Favoris from "./Pages/Favoris/Favoris";
import Comics from "./Pages/Comics/Comics";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

function App() {
  const [token, setToken] = useState("");

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home token={token} />} />

        <Route
          path="/login"
          element={<Login token={token} setToken={setToken} />}
        />
        <Route
          path="/signup"
          element={<Signup />}
          token={token}
          setToken={setToken}
        />

        <Route path="/personnages" element={<Personnages />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/favoris" element={<Favoris />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
