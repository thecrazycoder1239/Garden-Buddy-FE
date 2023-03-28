export default function FilterPlants() {
  return (
    <form className="filter-plants">
      <select name="plants" id="filter-plants">
        <option value="">Filter</option>
        <input type="checkbox" id="easy" name="easy" />
        <label htmlFor="easy">Easy</label>
      </select>
    </form>
  );
}