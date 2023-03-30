import AddPlantButton from "./AddPlantButton";

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
  const [date, setDate] = useState(new Date());

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log("plant id:", e.target.value, "chosen date:", date)
  }

  useEffect(() => {
    setIsLoadingPlants(true);
    getPlants().then((data) => {
      setPlants(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsLoadingPlants(false);
    });
  }, []);

  return isLoadingPlants ? (
    <h1>Plants incoming...</h1>
  ) : (
    <section className="plant-cards">
      {/* <AddPlantButton date={date} setDate={setDate}/> */}
      <ul className="plant-cards">
        {plants.map((plant) => {
          return (
            <div className='single-plant-container'>
              <AddPlantButton date={date} setDate={setDate}/>
              <Link to={`/all-plants/${plant["_id"]}`}>
              <li className="plant-card" key={plant["_id"]}>
              <button className="add-plant-button" onClick={handleClick} value={plant["_id"]}>Plant!</button>
              {/* <li onClick={() => setSinglePlant(plant["_id"])} className="plant-card" key={plant["_id"]}> */}
                <div>
                  <h2>{plant["name"]}</h2>
                  <p>{plant["scientific_name"]}</p>
                  <div className="description-container">
                    <p className="plant-description">{plant["description"]}</p>
                  </div>
                  <div className="votes">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
                </div>
                <img alt='plant' src={plant["thumbnail_url"]} />
            </li>
            </Link>
            </div>
          );
        })}
      </ul>
    </section>
  );
}
