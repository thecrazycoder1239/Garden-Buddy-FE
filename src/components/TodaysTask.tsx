import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { deleteTaskById, getUsersDetailedPlant } from "../utils/api";
import { UserContext } from "../contexts/User";
import getPreviousSessionUser from "../utils/getPreviousSessionsUsername";

export default function TodaysTask({
  task,
  setTodaysTasks,
}: {
  task: Task & { plant: UsersPlant };
  setTodaysTasks: React.Dispatch<
    React.SetStateAction<
      | (Task & {
          plant: UsersPlant;
        })[]
      | null
    >
  >;
}) {
  const [checked, setChecked] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        ></input>
        {task.task_slug.slice(0, 1).toUpperCase() + task.task_slug.slice(1)}{" "}
        {task.plant.name}
      </label>
      {checked ? (
        <>
          {user && user.password ? (
            <button
              onClick={() => {
                if (user && user.password) {
                  deleteTaskById(task.users_task_id, user).then(() => {
                    if ("serviceWorker" in navigator) {
                      return getUsersDetailedPlant(task.users_plant_id, user);
                    }
                  });
                  setTodaysTasks((currTasks) => {
                    if (currTasks) {
                      return currTasks.filter((currTask) => {
                        return task.users_task_id !== currTask.users_task_id;
                      });
                    }

                    return null;
                  });
                }
              }}
              className="form"
            >
              Delete
            </button>
          ) : (
            <Link to="/log-in" className="add-plant-button-no-user-message s">
              <button className="form">Sign in to delete task</button>
            </Link>
          )}
        </>
      ) : (
        <Link
          style={{
            padding: "8px 15px",
            borderRadius: "5px",
            border: "none",
            background: "#49592a",
            color: "white",
          }}
          to={`/my-calendar/${task.users_plant_id}/edit-log`}
        >
          {user && user.password ? "Edit / Log" : "View"}
        </Link>
      )}
    </li>
  );
}
