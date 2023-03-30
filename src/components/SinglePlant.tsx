// Hooks
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// API
import { getSinglePlant } from "../utils/api";

export default function SinglePlant() {
  // const { _id } = useParams();


  // IMPORTANT: change any on line 14. We didn't know what to put.
  const [isLoadingSinglePlant, setIsLoadingSinglePlant] = useState(false);
  const [singlePlant, setSinglePlant] = useState<GrowStuffCrop | null>(null);

  useEffect(() => {
    getSinglePlant(1).then((data) => {
      setIsLoadingSinglePlant(true);
      setSinglePlant(data);
      setIsLoadingSinglePlant(false);
    });
  }, []);

  console.log(singlePlant)

  return isLoadingSinglePlant ? (
    <h1>Plant Incoming...</h1>
  ) : (
    <section className="single-plant-card">
      {singlePlant !== null ? <h3>{singlePlant["name"]}</h3> : <></>}
      <p>hello</p>
    </section>
  );
}
