export default function UpcomingTasks() {
  return (
    <section className="upcoming-tasks">
      <ul>
        <li>
          <h2>Tomorrow</h2>
          <ul className="task-cards">
            <li>
              <p>Water aubergines</p>
            </li>
          </ul>
        </li>
        <li>
          <h2>28th March</h2>
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
          <h2>29th March</h2>
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
        </li>
      </ul>
    </section>
  );
}
