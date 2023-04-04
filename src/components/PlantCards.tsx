// Components
import SinglePlantCard from "./SinglePlantCard";

// Hooks
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// API
import { getPlants, getSinglePlant } from "../utils/api";
import useOnlineStatus from "../hooks/useOnlineStatus";

export default function PlantCards() {
  const [searchParams] = useSearchParams();
  const [isLoadingPlants, setIsLoadingPlants] = useState(true);
  const online = useOnlineStatus();
  const [plants, setPlants] = useState<GrowStuffCrop[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [reachedTheEnd, setReachedTheEnd] = useState(false)

  useEffect(() => {
    if (online) {
      
      setIsLoadingPlants(true);
      getPlants(searchParams.get('search'), pageNumber)
      .then((data) => {
        if(data.length === 0) {
          setReachedTheEnd(true)
        } else {
          setReachedTheEnd(false)
          setPlants(data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoadingPlants(false);
      });
    } else {
      getPlants(searchParams.get('search'), pageNumber)
      .then((data) => {
        setIsLoadingPlants(false)
        if(data.length === 0) {
          setReachedTheEnd(true)
        } else {
          setReachedTheEnd(false)
          setPlants(data);
        }
      })
      // This call is not assumed to resolve, however it might if the result is cached
      .catch()
    }
  }, [searchParams, online, pageNumber]);

  useEffect(() => {
    //Only prefetch if there is a serviceWorker
    if (online && ('serviceWorker' in navigator)) {
      Promise.all(
        plants.map(plant => getSinglePlant(plant._id))
      )
    }
  }, [online, plants])


  if(reachedTheEnd === true) {
    return (
    <>
    <p className="reached-the-end-of-plants">You have viewed all our plants!</p>
    <section className="pagination">
        <button onClick={() => {
          setPageNumber(pageNumber - 1)
        }}>{'<'}</button>
        <p>{pageNumber}</p>
        <button onClick={() => {
          setPageNumber(pageNumber + 1)
        }}>{'>'}</button>
    </section>
    </>
    )
  }

  return isLoadingPlants ? (
    <p className="p-loading-status">Plants incoming...</p>
  ) : (
    <>
    <section className="plant-cards">
      {/* <AddPlantButton date={date} setDate={setDate}/> */}
      <ul className="plant-cards">
        {plants.map((plant) => {
          return <SinglePlantCard plant={plant} key={plant["_id"]} />;
        })}
      </ul>
    </section>
    <section className="pagination">
        <button onClick={() => {
          setPageNumber(pageNumber - 1)
        }}>{'<'}</button>
        <p>{pageNumber}</p>
        <button onClick={() => {
          setPageNumber(pageNumber + 1)
        }}>{'>'}</button>
    </section>
    </>
  );
}
