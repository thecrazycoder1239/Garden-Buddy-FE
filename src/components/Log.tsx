// Components
import NewLog from "./NewLog";
import LogHistory from "./LogHistory";
import { useState } from "react";

export default function Log({plant}: {plant: DetailedUsersPlant}) {
  const [ logs, setLogs ] = useState<Log[]>(plant.logs);

  return (
    <section className="log">
      <NewLog plant={plant} setLogs={setLogs} />
      <LogHistory logs={logs} />
    </section>
  );
}
