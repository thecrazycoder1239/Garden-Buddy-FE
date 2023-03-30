// Hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// API
import { getSinglePlant } from "../utils/api";

// Components
import Comments from './Comments'

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
    <section className="single-plant">
      {singlePlant === null ? (
        <></>
      ) : (
        <>
          <h2>{singlePlant["name"]}</h2>
          <img src={singlePlant["openfarm_data"]["attributes"]["main_image_path"]} alt="plant image" />
          <p>{singlePlant["openfarm_data"]["attributes"]["description"]}</p>
          <p>...other values from api '/crops/:id'</p>
          <Comments />
        </>
      )}
    </section>
  );
}
