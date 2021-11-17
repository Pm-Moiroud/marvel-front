import "./App.css";

import Header from "./components/header/Header";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Home from "./Pages/Home/Home";
import Personnages from "./Pages/Personnages/Personnages";
import Favoris from "./Pages/Favoris/Favoris";
import Comics from "./Pages/Comics/Comics";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

function App() {
  const [token, setToken] = useState(Cookies.get("Token") || null);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Router>
      <Header token={token} setToken={setToken} />

      <Routes>
        <Route path="/" element={<Home token={token} setToken={setToken} />} />

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

        <Route
          path="/personnages"
          element={
            <Personnages isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        />
        <Route
          path="/comics"
          element={<Comics isLoading={isLoading} setIsLoading={setIsLoading} />}
        />
        <Route path="/favoris" element={<Favoris />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
