// Hooks
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

// Components
import SearchForPlant from "./SearchForPlant";
import SortPlants from "./SortPlants";
import FilterPlants from "./FilterPlants";
import PlantCards from "./PlantCards";
import Pagination from "./Pagination";
import SinglePlant from "./SinglePlant";

export default function AllPlants() {
  // const [plantId, setPlantId] = useState<number>(0)
  const [singlePlant, setSinglePlant] = useState([])

  return (
    <section className="all-plants">
      <SearchForPlant />
      <div className="sort-filter-flex">
        <SortPlants />
        <FilterPlants />
      </div>
      {/* <PlantCards setPlantId={setPlantId}/> */}
      <PlantCards />
      <Pagination />
      <Routes>
        <Route path="/all-plants/:_id" element={<SinglePlant />} />
      </Routes>
    </section>
  );
}
