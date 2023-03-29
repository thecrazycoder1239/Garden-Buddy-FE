// Hooks
import { useState } from "react";

// Components
import SelectTaskFrequency from "./SelectTaskFrequency";

export default function EditTasks() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsActive((current) => !current);
  };

  return (
    <section className="edit-tasks">
      <h2>Edit your tasks</h2>
      <h2>How often do you want to water your tomatoes?</h2>
      <SelectTaskFrequency />
      <div className="line-break"></div>
      <form className="add-tasks">
        <button onClick={handleClick}>
          Add another task <span>+</span>
        </button>
        <div
          className={
            isActive ? "" : "invisible"
          }
        >
          <form className="add-another-task">
            <input type="text"></input>
            <button
              type="submit"
              className="form"
              onClick={(e) => e.preventDefault()}
            >
              Add
            </button>
          </form>
          <SelectTaskFrequency />
        </div>
        <p>
          (Suggestions: repotting, check soil, check for bugs, harvest, ...)
        </p>
      </form>
      <div className="line-break"></div>
    </section>
  );
}
