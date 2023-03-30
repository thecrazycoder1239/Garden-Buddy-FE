// Hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// API
import { getSinglePlant } from "../utils/api";

export default function SinglePlant() {
  const { _id } = useParams();
  const [isLoadingSinglePlant, setIsLoadingSinglePlant] = useState(false);
  const [singlePlant, setSinglePlant] = useState<GrowStuffCrop | null>(null);

  useEffect(() => {
    getSinglePlant(_id).then((data) => {
      setIsLoadingSinglePlant(true);
      setSinglePlant(data);
      setIsLoadingSinglePlant(false);
    });
  }, []);

  return isLoadingSinglePlant ? (
    <h1>Plant Incoming...</h1>
  ) : (
    <section className="single-plant-card">
      {singlePlant !== null ? <h3>{singlePlant["name"]}</h3> : <></>}
      <p>hello</p>
    </section>
  );
}
