import "./personnages.css";
import Personnage from "../../components/Personnage/Personnage";
import axios from "axios";
import { useState, useEffect } from "react";

const Personnages = ({ params, setParams, favorite, setFavorite, token }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(`http://localhost:3001/characters`, {
          params,
        });
        const originalsCharacters = response.data;
        setData(originalsCharacters);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [params]);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div className="background">
      <input
        className="input-header"
        onChange={(e) =>
          setParams((prevParams) => ({
            ...prevParams,
            name: e.target.value,
          }))
        }
        placeholder="Chercher des articles"
        type="text"
      />
      <main className="card-container">
        {data.map((elements, index) => {
          return (
            <div className="card">
              <Personnage
                token={token}
                setFavorite={setFavorite}
                favorite={favorite}
                key={index}
                name={elements.name}
                id={elements._id}
                picture={elements.thumbnail.path}
                description={elements.description}
                extension={elements.thumbnail.extension}
              />
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Personnages;
