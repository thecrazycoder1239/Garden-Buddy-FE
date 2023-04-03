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
    if (_id) {
      getSinglePlant(_id).then((data) => {
        setIsLoadingSinglePlant(true);
        setSinglePlant(data);
        setIsLoadingSinglePlant(false);
      })
      .catch(console.error)
    }
  }, [_id]);
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
          <ul className="data-table">
            <li><b>Sun requirements:</b> {singlePlant["openfarm_data"]["attributes"]["sun_requirements"]}</li>
            <li><b>Sowing method:</b> {singlePlant["openfarm_data"]["attributes"]["sowing_method"]}</li>
            <li><b>Height:</b> {singlePlant["openfarm_data"]["attributes"]["height"]}cm</li>
            <li><b>Spread:</b> {singlePlant["openfarm_data"]["attributes"]["spread"]}cm</li>
          </ul>
          <button className="full-width">Add this plant to your calendar</button>
          <div className="line-break"></div>
          <Comments />
        </>
      )}
    </section>
  );
}
