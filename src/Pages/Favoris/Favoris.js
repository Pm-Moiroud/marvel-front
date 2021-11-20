import "./favoris.css";

import Personnage from "../../components/Personnage/Personnage";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Favoris = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const userID = localStorage.getItem("userID");
  const token = Cookies.get("Token");

  useEffect(() => {
    try {
      console.log(token);
      const fetchData = async () => {
        const response = await axios.get(
          `http://localhost:3001/favorite`,
          userID,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const originalsFavorite = response.data;
        setData(originalsFavorite);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [userID]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <>
      {token ? (
        <div>
          <div className="background">
            <main className="card-container">
              {data.map((elements, index) => {
                return (
                  <div className="card">
                    <Personnage
                      key={index}
                      name={elements.name}
                      id={elements._id}
                      picture={elements.picture}
                      description={elements.description}
                      extension={elements.extension}
                    />
                  </div>
                );
              })}
            </main>
          </div>
        </div>
      ) : (
        <div>
          <span>
            We are sorry, but you need to login in order to add favorite
          </span>
        </div>
      )}
    </>
  );
};

export default Favoris;
