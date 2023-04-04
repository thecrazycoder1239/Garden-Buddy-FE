import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import { getUsersPlantsTasks } from "../utils/api";
import DailyTasks from "./DailyTasks";

export default function UpcomingTasks() {
  
  const { user } = useContext(UserContext); 
  // const date = Date.now()


  const DaysFromNow = (todaysDate: number, increment: number ) => {
    new Date(1000 * 60 * 60 * 24 * increment + todaysDate)

  }

  

  const [isLoadingTasks, setIsLoadingTasks] = useState(false);
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [dateToTaskMap, setDateToTaskMap] = useState<Map<string, Task[]>>(new Map())


  useEffect(() => {
    if(tasks){
      setDateToTaskMap(tasks.reduce((map, currentTask) => {
        
        const taskTimeStamp = currentTask.task_start_date;
        const taskDate =new Date(taskTimeStamp).toDateString();
        const dailyTasks = map.get(taskDate) || [];
        
        dailyTasks.push(currentTask);
        map.set(taskDate, dailyTasks);
        return map 

     }, new Map())
      )
    }
    
  }, [tasks])

  useEffect(() => {
    setIsLoadingTasks(true);
    if (user) {
    getUsersPlantsTasks(user)
    .then((myTasks) => {
      
      setTasks(myTasks);
     })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsLoadingTasks(false);
    })
  }
}, [user])




  const dates = [...dateToTaskMap.keys()]
  .filter((date)=> {
    return new Date(date).getTime() >= new Date(new Date().toDateString()).getTime()
  })
  dates.sort((a, b) => {
    if( a === b) return 0
    if(new Date(a).getTime() >= new Date(b).getTime()) return 1
    return -1
  })

  

  return (
    <section className="upcoming-tasks">
      <ul>
        
        {dates.map((date) => {
          return <DailyTasks key={date} date={date} tasks={dateToTaskMap.get(date)} />
          
        })}
      </ul>
  </section>
  );
}

{/* <li>
  <h2>Tomorrow</h2>
  <ul className="task-cards">
    <li>
      <p>Water aubergines</p>
    </li>
  </ul>
</li>
<li>
  <h2> 2 days time </h2>
  <ul className="task-cards">
    <li>
      <p>Plant tomatoes</p>
    </li>
    <li>
      <p>Weed spinach</p>
    </li>
  </ul>
</li>
<li>
  <h2>3 days time</h2>
  <ul className="task-cards">
    <li>
      <p>Plant artichokes</p>
    </li>
    <li>
      <p>Water lettuce</p>
    </li>
    <li>
      <p>Repot carrots</p>
    </li>
  </ul>
</li> */}
