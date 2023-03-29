// Components
import NewLog from "./NewLog";
import LogHistory from "./LogHistory";

export default function Log() {
  return (
    <section className="log">
      <NewLog />
      <LogHistory />
    </section>
  );
}
