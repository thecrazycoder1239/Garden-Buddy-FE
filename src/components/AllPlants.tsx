// Components
import SearchForPlant from "./SearchForPlant";
import SortPlants from "./SortPlants";
import FilterPlants from "./FilterPlants";
import PlantCards from "./PlantCards";
import Pagination from "./Pagination";

export default function AllPlants() {
  return (
    <section className="all-plants">
      <SearchForPlant />
      <div className="sort-filter-flex">
        <SortPlants />
        <FilterPlants />
      </div>
      <PlantCards />
      <Pagination />
    </section>
  );
}
