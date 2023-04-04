// Hooks
// Components
import SearchForPlant from "./SearchForPlant";
// import SortPlants from "./SortPlants";
// import FilterPlants from "./FilterPlants";
import PlantCards from "./PlantCards";
// import Pagination from "./Pagination";
import { useState } from "react";

export default function AllPlants() {

  const [sortBy, setSortBy] = useState('')
  
  return (
    <section className="all-plants">
      <SearchForPlant />
      <div className="sort-filter-flex">
      <button onClick={(e) => {
        e.preventDefault()
        setSortBy("sowing-month-chrono")
      }}>closest to sowing month</button>
      <button onClick={(e) => {
        e.preventDefault()
      }}>Lowest maintenance</button>
      <button onClick={(e) => {
        e.preventDefault()
      }}>Alphabetical order</button>
        {/* <FilterPlants /> */}
      </div>
      <PlantCards 
      />
      {/* <Pagination /> */}
      
    </section>
  );
}
