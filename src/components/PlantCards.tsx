import SinglePlantCard from "./SinglePlantCard";

// Hooks
import { useEffect, useState } from "react";

// API
import { getPlants } from "../utils/api";

export default function PlantCards() {
  const [isLoadingPlants, setIsLoadingPlants] = useState(false);
  const [plants, setPlants] = useState<GrowStuffCrop[]>([]);
  const [date, setDate] = useState(new Date());

  const {user} = useContext(UserContext);
  
  const handleClick = (e: any) => {
    e.preventDefault();
    if (user) {
      postPlantToUser(user, e.target.value, date)
      .then(console.log);
    }
    
    return({msg: 'added'})
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
              <CalendarPicker date={date} setDate={setDate}/>
              <Link to={`/all-plants/${plant["_id"]}`}>
              <li className="plant-card" key={plant["_id"]}>
                {user? 
              <button className="add-plant-button" onClick={handleClick} value={plant["_id"]}>Plant!</button> 
                : <p className="add-plant-button-no-user-message">Sign in to add plant</p>}
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
                <img src={plant["thumbnail_url"]} alt='plant'/>
              </li>
            </Link>
            <SinglePlantCard plant={plant} key={plant["_id"]}/>
            </div>
          );
        })}
      </ul>
    </section>
  );
}
