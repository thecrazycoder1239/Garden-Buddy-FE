import { getUsersDetailedPlant } from "../utils/api";
import { UserContext } from "../contexts/User";
import { useEffect, useContext, useState } from "react";


export default function DailyTasks({date, tasks}: {date: string, tasks: Task[] | undefined}) {
   
  const [allPlantNames, setAllPlantNames] = useState<string[]>([])

    const{ user } = useContext(UserContext);

    useEffect(() => {
        if (tasks && user) {
            tasks.forEach((task) => {
                return getUsersDetailedPlant(task.users_plant_id, user)
                .then((plant) => {
                    setAllPlantNames((currentPlantNames) => {
                        const newNames = [...currentPlantNames]
                        newNames[task.users_plant_id] = plant.name
                        return newNames
                    })
                })
             })
        }
       
    }, [])
    console.log(allPlantNames)

    const today = new Date().toDateString();
   const tomorrow = new Date(Date.now() + 1000 * 60 * 60 * 24).toDateString()
   const dayAfterTommorow =  new Date(Date.now() + 1000 * 60 * 60 * 24 * 2).toDateString()
    
   const dateHeading = (date === today) ? "Today" 
    : (date === tomorrow) ? "Tomorrow" : `${date}`;
    

  return (
    <li>
    <h2> {`${dateHeading}`}</h2>
    <ul className="task-cards">
    {tasks?.map((task) => {
       return <li>
            <p>{[task.task_slug, allPlantNames[task.users_plant_id]]
             } {allPlantNames[task.users_plant_id]}</p>
        </li>
    })}
    </ul>
    </li>
    
  )
      
}

