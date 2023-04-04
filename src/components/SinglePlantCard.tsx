import CalendarPicker from "./CalendarPicker";

// Hooks
import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { Link, useParams } from "react-router-dom";

// API
import { postPlantToUser } from "../utils/api";

// Icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function SinglePlantCard({ plant }: { plant: GrowStuffCrop }) {
  const [date, setDate] = useState(new Date());

  const [buttonActive, setButtonActive] = useState(true);
  const [buttonStyle, setButtonStyle] = useState({
    transition: "0s",
    background: "#333",
  });

  const { user } = useContext(UserContext);

  function changeColor() {
    setButtonStyle({
      transition: "0.3s",
      background: "#1ec765",
    });
  }

  function fadeColor() {
    setButtonStyle({
      transition: "0.3s",
      background: "#333",
    });
  }

  const handleClick = (e: any) => {
    e.preventDefault();
    if (user) {
      setButtonActive(false);
      changeColor();
      postPlantToUser(user, e.target.value, date)
        .then(console.log)
        .finally(() => {
          let timer = setTimeout(() => {
            fadeColor();
            setButtonActive(true);
          }, 3000);
        });
    }
    return { msg: "added" };
  };

  return (
    <li className="single-plant-container" key={plant["_id"]}>
      <Link to={`/all-plants/${plant["_id"]}`}>
        {/* <li onClick={() => setSinglePlant(plant["_id"])} className="plant-card" key={plant["_id"]}> */}
        <div>
          <img alt="plant" src={plant["thumbnail_url"]} />
          <div className="description-container">
            <h2>{plant["name"]}</h2>
            <p>
              <i>{plant["scientific_name"]}</i>
            </p>
            <p className="plant-description">{plant["description"]}</p>
            <div className="votes">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </div>
        </div>
      </Link>
      {user ? (
        <div className="set-plant-date">
          <CalendarPicker date={date} setDate={setDate} />
          <button
            style={buttonStyle}
            className="form"
            onClick={handleClick}
            value={plant["_id"]}
            disabled={!buttonActive}
          >
            Plant!
          </button>
        </div>
      ) : (
        <div className="sign-in set-plant-date">
          <Link to="/log-in" className="add-plant-button-no-user-message">
            <button className="form">Sign in to add plant</button>
          </Link>
        </div>
      )}
    </li>
  );
}
