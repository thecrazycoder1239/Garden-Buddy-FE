// Components
import Log from "./Log";
import EditTasks from "./EditTasks";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getUsersDetailedPlantCacheFirst } from "../utils/api";
import { UserContext } from "../contexts/User";

export default function EditAndLog() {
  const { plant_id } = useParams();

  const [plant, setPlant] = useState<DetailedUsersPlant | null>(null)
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (plant_id && user) {
      getUsersDetailedPlantCacheFirst(+plant_id, user)
        .then(plant => {
          setPlant(plant);
        })
    }
  }, [plant_id, user])

  return (
    <section className="edit-and-log">
      {
        plant ?
<>
        <h2>Edit "{plant.name}"</h2>
      <Log plant={plant} />
      <EditTasks  />
      <button className="full-width remove-from-my-plants">Remove "{plant.name}" from My Plants</button>
      <div className="line-break"></div>
      <button className="full-width more-info-on-plant">Get more information on "{plant.name}"</button>
</>: 
<p className="p-loading-status">Plant incoming...</p>
      }
    </section>
  );
}
