import React, { useEffect, useState, useContext } from "react";
import { getUsersPlants } from "../utils/api";
import { UserContext } from "../contexts/User";
import SingleUserPlantCard from './SingleUserPlantCard';


export default function MyPlants() {

  const [plants, setPlants] = useState<UsersPlant[]>([]);
  const [isLoadingPlants, setIsLoadingPlants] = useState(false);

  const { user } = useContext(UserContext);

  useEffect(() => {
    setIsLoadingPlants(true);
    if (user) {
    getUsersPlants(user)
    .then((data) => {
      console.log(data);
      setPlants(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsLoadingPlants(false);
    })
  }
}, [])

    return (
      isLoadingPlants ? (
        <h1>Plants incoming...</h1>
        ) : (
          <>
          <section className="my-plants">
            <ul className="my-plants-cards">
              {plants.map((plant) => {
                return <SingleUserPlantCard plant={plant} key={plant.plant_id} />;
              })}
            </ul>
          </section>
          </>
      )
    )
}

/*

      <button onClick={handleClick}>Click!</button>
      <section className="my-plants">
        <ul className="my-plants-cards">
          <li>
            <h2>Tomatoes</h2>
            <p>Growing Since: 12/02/23</p>
            <form>
              <button className="plain-text" type="submit">
                Remove from My Plants
              </button>
            </form>
          </li>
          <div className="line-break"></div>
          <li>
            <h2>Potatoes</h2>
            <p>Growing Since: 12/02/23</p>
            <form>
              <button className="plain-text" type="submit">
                Remove from My Plants
              </button>
            </form>
          </li>
          <div className="line-break"></div>
        </ul>
      </section>

*/