// Components
import SinglePlantCard from "./SinglePlantCard";

// Hooks
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

// API
import { getPlants, getSinglePlant } from "../utils/api";
import useOnlineStatus from "../hooks/useOnlineStatus";

export default function PlantCards() {

  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoadingPlants, setIsLoadingPlants] = useState(true);
  const online = useOnlineStatus();
  const [plants, setPlants] = useState<GrowStuffCrop[]>([]);
  const [reachedTheEnd, setReachedTheEnd] = useState(false)

  useEffect(() => {
    if (online) {
      setIsLoadingPlants(true);
      getPlants(searchParams.get('search'), searchParams.get("page"))
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
      getPlants(searchParams.get('search'), searchParams.get("page"))
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
  }, [searchParams, online]);

  useEffect(() => {
    //Only prefetch if there is a serviceWorker
    if (online && ('serviceWorker' in navigator)) {
      Promise.all(
        plants.map(plant => getSinglePlant(plant._id))
      )
    }
  }, [online, plants])

  const page = searchParams.get("page")

  let pageNumber = 1;
  if(page !== null) {
    pageNumber = parseInt(page)
  }

  function changePageNumber(pageNum: number) {

    const search = searchParams.get("search");
    if(search) {
      setSearchParams({ search, page: pageNum.toString() })
    } else {
      setSearchParams({ page: pageNum.toString() })
    }

    
  }

  if(reachedTheEnd === true) {
    return (
    <>
    <p className="reached-the-end-of-plants">You have viewed all our plants!</p>
    <section className="pagination">
        <button onClick={() => {
           changePageNumber(pageNumber - 1)
        }} disabled={pageNumber === 1}>{'<'}</button>
        <p>{pageNumber}</p>
        <button onClick={() => {
            changePageNumber(pageNumber + 1)
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
            setSearchParams({page: (pageNumber - 1).toString()})
        }} disabled={pageNumber === 1}>{'<'}</button>
        <p>{pageNumber}</p>
        <button onClick={() => {
          setSearchParams({page: (pageNumber + 1).toString()})
        }}>{'>'}</button>
    </section>
    </>
  );
}
