import React, { useEffect, useState, useContext } from "react";
import { getUsersPlants } from "../utils/api";
import { UserContext } from "../contexts/User";


export default function MyPlants() {

  const [plants, setPlants] = useState([]);

  const { user } = useContext(UserContext);

  const handleClick = (e: any) => {
    if (user){
    e.preventDefault();
      getUsersPlants(user)
      .then((data) =>{
        console.log(data);
      })
    }
  }

    return (
      <button onClick={handleClick}>Click!</button>
    );
}

/*

<div>
      <h2>My Plants</h2>
      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
        </div>


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