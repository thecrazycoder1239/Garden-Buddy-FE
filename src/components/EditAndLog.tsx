// Components
import Log from "./Log";
import EditTasks from "./EditTasks";

export default function EditAndLog() {
  return (
    <section className="edit-and-log">
      <h2>Edit "Tomatoes"</h2>
      <Log />
      <EditTasks />
      <button className="full-width remove-from-my-plants">Remove "tomatoes" from My Plants</button>
      <div className="line-break"></div>
      <button className="full-width more-info-on-plant">Get more information on "tomatoes"</button>
    </section>
  );
}
