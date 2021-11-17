import "./personnages.css";
import Personnage from "../../components/Personnage/Personnage";
import axios from "axios";
import { useState, useEffect } from "react";

const Personnages = ({ isLoading, setIsLoading }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://mfomarvel.herokuapp.com/characters`
      );
      setData(response.data);
    };
    fetchData();
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div className="background">
      <main className="card-container">
        {data.map((elements, index) => {
          return (
            <div className="card">
              <Personnage
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
