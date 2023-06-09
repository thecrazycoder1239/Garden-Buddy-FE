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
      setPlants(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsLoadingPlants(false);
    })
  }
}, [user])

    return (
      isLoadingPlants ? (
        <h1>Plants incoming...</h1>
        ) : (
          <>
          <section className="plant-cards">
            <ul className="plants-cards">
              <div className="plant-cards">
              {plants.map((plant) => {
                return <SingleUserPlantCard setPlants={setPlants} plant={plant} key={plant.users_plant_id} />;
              })}
              </div>
              
            </ul>
          </section>
          </>
      )
    )
}
