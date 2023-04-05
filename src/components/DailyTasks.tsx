import {
  GiBoltCutter,
  GiFertilizerBag,
  GiHealthNormal,
  GiPlantRoots,
  GiPlantWatering,
  GiSpottedBug,
} from "react-icons/gi";

export default function DailyTasks({
  date,
  tasks,
}: {
  date: string;
  tasks: (Task & { plant: UsersPlant })[] | undefined;
}) {
  const today = new Date().toDateString();
  const tomorrow = new Date(Date.now() + 1000 * 60 * 60 * 24).toDateString();

  const dateHeading =
    date === today ? "Today" : date === tomorrow ? "Tomorrow" : `${date}`;

  const matchingIcon = (task_slug: TaskSlug): React.ReactNode => {
    return {
      fertilise: <GiFertilizerBag />,
      harvest: <GiPlantRoots />,
      water: <GiPlantWatering />,
      prune: <GiBoltCutter />,
      "look for bugs": <GiSpottedBug />,
      "health check": <GiHealthNormal />,
    }[task_slug];
  };

  return (
    <li>
      <h2>{`${dateHeading}`}</h2>
      <ul className="task-cards">
        {tasks?.map((task) => {
          return (
            <li>
              <h3>
                {matchingIcon(task.task_slug)}{" "}
                {task.task_slug.slice(0, 1).toUpperCase() +
                  task.task_slug.slice(1)}{" "}
                {task.plant.name}
              </h3>
              <p>
                at {new Date(task.task_start_date).toLocaleTimeString("en-UK")}
              </p>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
