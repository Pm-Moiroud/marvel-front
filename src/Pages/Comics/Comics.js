import "./comics.css";
import Comic from "../../components/Comic/Comic";
import axios from "axios";
import { useState, useEffect } from "react";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [params, setParams] = useState();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(`http://localhost:3001/comics`, {
          params,
        });
        const originalsCharacters = response.data;
        setData(originalsCharacters);
        setIsLoading(false);
        console.log("Ici les params ", params);
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
            title: e.target.value,
          }))
        }
        placeholder="Chercher des articles"
        type="text"
      />
      <main className="card-container">
        {data.map((elements, index) => {
          return (
            <div className="card">
              <Comic
                key={index}
                name={elements.title}
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

export default Comics;
