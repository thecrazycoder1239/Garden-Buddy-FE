// Components
import SinglePlantCard from "./SinglePlantCard";

// Hooks
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// API
import { getPlants } from "../utils/api";

export default function PlantCards() {
  const [searchParams] = useSearchParams();
  const [isLoadingPlants, setIsLoadingPlants] = useState(false);
  const [plants, setPlants] = useState<GrowStuffCrop[]>([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setIsLoadingPlants(true);
    getPlants(searchParams.get('search'))
      .then((data) => {
        setPlants(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoadingPlants(false);
      });
  }, [searchParams]);

  return isLoadingPlants ? (
    <h1>Plants incoming...</h1>
  ) : (
    <section className="plant-cards">
      {/* <AddPlantButton date={date} setDate={setDate}/> */}
      <ul className="plant-cards">
        {plants.map((plant) => {
          return <SinglePlantCard plant={plant} key={plant["_id"]} />;
        })}
      </ul>
    </section>
  );
}
