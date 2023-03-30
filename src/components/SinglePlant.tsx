// Hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// API
import { getSinglePlant } from "../utils/api";

export default function SinglePlantCard() {
  const { _id } = useParams();
  const [isLoadingSinglePlant, setIsLoadingSinglePlant] = useState(false);

  useEffect(() => {
    getSinglePlant(_id).then((data) => {
      setIsLoadingSinglePlant(true);
      setSinglePlant(data);
      setIsLoadingSinglePlant(false);
    });
  });
  return isLoadingSinglePlant ? (
    <h1>Plant Incoming...</h1>
  ) : (
    <section className="single-plant-card"></section>
  );
}
