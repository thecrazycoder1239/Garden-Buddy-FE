// Hooks
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodaysTask from "./TodaysTask";
import { getUsersPlantsTasks } from "../utils/api";
import { UserContext } from "../contexts/User";

export default function TodaysTasks() {
  const [todaysTasks, setTodaysTasks] = useState<
    (Task & { plant: UsersPlant })[] | null
  >(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      getUsersPlantsTasks(user)
        .then((tasks) => {
          return tasks.filter((task) => {
            return (
              new Date(task.task_start_date).toDateString() ===
              new Date().toDateString()
            );
          });
        })
        .then((tasks) => {
          setTodaysTasks(tasks);
        });
    }
  }, [user]);

  return (
    <section className="todays-tasks">
      {todaysTasks ? (
        <>
          <ul className="task-cards">
            {todaysTasks.map((task) => {
              return (
                <TodaysTask
                  task={task}
                  key={task.users_task_id}
                  setTodaysTasks={setTodaysTasks}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <p className="p-loading-status">Tasks incoming...</p>
      )}
      <Link
        to="/all-plants"
        // className="add-more-plants"
        // style={{
        //   margin: "auto",
        //   width: "100%",
        //   border: "2px solid #333",
        //   background: "none",
        //   padding: "18px 10px",
        //   borderRadius: "15px",
        // }}
      >
        <button className="full-width">Add more plants to your calendar</button>
      </Link>
    </section>
  );
}
