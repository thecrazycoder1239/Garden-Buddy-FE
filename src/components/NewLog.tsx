import { useContext, useState } from "react";
import { getUsersDetailedPlant, postLogToUsersPlant } from "../utils/api";
import { UserContext } from "../contexts/User";
import { Link } from "react-router-dom";

export default function NewLog({
  plant,
  setLogs,
}: {
  plant: DetailedUsersPlant;
  setLogs: React.Dispatch<React.SetStateAction<Log[]>>;
}) {
  const [log, setLog] = useState("");
  const { user } = useContext(UserContext);

  return (
    <form
      className="new-log"
      onSubmit={(e) => {
        e.preventDefault();

        if (user) {
          postLogToUsersPlant(
            user,
            plant.users_plant_id,
            log,
            new Date().toISOString()
          ).then((newLog) => {
            setLogs((currLogs) => {
              return [...currLogs, newLog];
            });

            if ("serviceWorker" in navigator) {
              getUsersDetailedPlant(plant.users_plant_id, user);
            }

            setLog("");
          });
        }
      }}
    >
      <label htmlFor="log">How's your {plant.name} looking today?</label>
      <textarea
        id="log"
        value={log}
        onChange={(e) => setLog(e.target.value)}
      ></textarea>
      {user && user.password ? (
        <button className="form" type="submit">
          Enter
        </button>
      ) : (
        <Link to="/log-in" className="add-plant-button-no-user-message s">
          <button className="form">Sign in to add log</button>
        </Link>
      )}
    </form>
  );
}
