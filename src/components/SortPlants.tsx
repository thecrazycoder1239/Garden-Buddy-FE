export default function SortPlants() {
  return (
    <form className="sort-plants">
      <select name="plants" id="sort-plants">
        <option value="">
          Sort
        </option>
        <option value="sowing-month-chrono">
          Sowing month (soonest first)
        </option>
        <option value="sowing-month-reverse-chrono">
          Sowing month (last first)
        </option>
        <option value="alphabetical">Alphabetical</option>
        <option value="rev-alphabetical">Reverse alphabetical</option>
        <option value="easiest-first">Easiest first</option>
        <option value="hardest-first">Hardest first</option>
      </select>
    </form>
  );
}