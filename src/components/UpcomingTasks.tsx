import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import { getUsersPlantsTasks } from "../utils/api";
import DailyTasks from "./DailyTasks";

export default function UpcomingTasks() {
  const { user } = useContext(UserContext);

  const [isLoadingTasks, setIsLoadingTasks] = useState(true);
  const [tasks, setTasks] = useState<(Task & { plant: UsersPlant })[] | null>(
    null
  );
  const [dateToTaskMap, setDateToTaskMap] = useState<
    Map<string, (Task & { plant: UsersPlant })[]>
  >(new Map());

  useEffect(() => {
    if (tasks) {
      setDateToTaskMap(
        tasks.reduce((map, currentTask) => {
          const taskTimeStamp = currentTask.task_start_date;
          const taskDate = new Date(taskTimeStamp).toDateString();
          const dailyTasks = map.get(taskDate) || [];

          dailyTasks.push(currentTask);
          map.set(taskDate, dailyTasks);
          return map;
        }, new Map())
      );
    }
  }, [tasks]);

  useEffect(() => {
    setIsLoadingTasks(true);
    if (user) {
      getUsersPlantsTasks(user)
        .then((usersTasks) => {
          setTasks(usersTasks);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoadingTasks(false);
        });
    }
  }, [user]);

  const dates = [...dateToTaskMap.keys()].filter((date) => {
    return (
      new Date(date).getTime() >= new Date(new Date().toDateString()).getTime()
    );
  });
  dates.sort((a, b) => {
    if (a === b) return 0;
    if (new Date(a).getTime() >= new Date(b).getTime()) return 1;
    return -1;
  });

  return (
    <section className="upcoming-tasks">
      {isLoadingTasks ? (
        <p className="p-loading-status">Tasks incoming...</p>
      ) : (
        <ul>
          {dates.map((date) => {
            return (
              <DailyTasks
                key={date}
                date={date}
                tasks={dateToTaskMap.get(date)}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
}
