// Components
import SinglePlantCard from "./SinglePlantCard";

// Hooks
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// API
import { getPlants } from "../utils/api";
import useOnlineStatus from "../hooks/useOnlineStatus";

export default function PlantCards() {
  const [searchParams] = useSearchParams();
  const [isLoadingPlants, setIsLoadingPlants] = useState(true);
  const online = useOnlineStatus();
  const [plants, setPlants] = useState<GrowStuffCrop[]>([]);

  useEffect(() => {
    if (online) {

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
    }
  }, [searchParams, online]);

  return isLoadingPlants ? (
    <p className="p-loading-status">Plants incoming...</p>
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
