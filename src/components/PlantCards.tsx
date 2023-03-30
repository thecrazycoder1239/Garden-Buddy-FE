// Hooks
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// API
import { getPlants } from "../utils/api";

// Icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function PlantCards() {
  const [isLoadingPlants, setIsLoadingPlants] = useState(false);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    getPlants().then((data) => {
      setIsLoadingPlants(true);
      setPlants(data);
      setIsLoadingPlants(false);
    });
  }, []);

  return isLoadingPlants ? (
    <h1>Plants incoming...</h1>
  ) : (
    <section className="plant-cards">
      <ul className="plant-cards">
        {plants.map((plant) => {
          return (
            <Link to={`/all-plants/${plant["_id"]}`}>
              {/* <li onClick={() => setSinglePlant(plant["_id"])} className="plant-card" key={plant["_id"]}> */}
              <li className="plant-card" key={plant["_id"]}>
                <div>
                  <h2>{plant["name"]}</h2>
                  <p>{plant["scientific_name"]}</p>
                  <p>{plant["description"]}</p>
                  <div className="votes">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
                </div>
                <img src={plant["thumbnail_url"]} />
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
}
