import "./comics.css";
import Comic from "../../components/Comic/Comic";
import { useState, useEffect } from "react";
import axios from "axios";

const Comics = ({ isLoading, setIsLoading }) => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseComics = await axios.get(
        `https://mfomarvel.herokuapp.com/comics`
      );
      setComics(responseComics.data);
    };
    fetchData();
    setIsLoading(false);
  }, []);

  console.log(comics);

  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div className="background">
      <main className="card-container">
        {comics.map((elements, index) => {
          return (
            <div className="card">
              <Comic
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
