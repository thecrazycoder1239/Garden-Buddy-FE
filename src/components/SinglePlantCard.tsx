import CalendarPicker from "./CalendarPicker";

// Hooks
import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { Link, useSearchParams } from "react-router-dom";

// API
import { postPlantToUser } from "../utils/api";

// Icons
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

export default function SinglePlantCard({ plant }: { plant: GrowStuffCrop }) {
  const [buttonStyle, setButtonStyle] = useState({
    transition: "0s",
    background: "#49592a",
  });

  const { user } = useContext(UserContext);
  const [date, setDate] = useState(new Date());
  const [searchParams] = useSearchParams();
  const [buttonActive, setButtonActive] = useState(true);

  function changeColor() {
    setButtonStyle({
      transition: "0.3s",
      background: "#6e8641",
    });
  }

  function fadeColor() {
    setButtonStyle({
      transition: "0.3s",
      background: "#49592a",
    });
  }

  const handleClick = (e: any) => {
    e.preventDefault();
    if (user) {
      setButtonActive(false);
      changeColor();
      postPlantToUser(user, e.target.value, date).finally(() => {
        setTimeout(() => {
          // fadeColor();
          setButtonActive(true);
        }, 3000);
      });
    }
    return { msg: "added" };
  };

  return (
    <li className="single-plant-container" key={plant["_id"]}>
      <Link to={`/all-plants/${plant["_id"]}`}>
        <div>
          <img alt="plant" src={plant["thumbnail_url"]} />

          <div className="description-container">
            <h2>{plant["name"]}</h2>
            <p>
              <i>{plant["scientific_name"]}</i>
            </p>
            <p className="plant-description">{plant["description"]}</p>

            <div className="votes">
              {searchParams.get("search")
                ? (() => {
                    //Search score is different than without search, assume that growstuff has different ways of score being measured
                    //We will assume that this relates to some match percentage. Let's arbitrarly set 1000 to be about 95% match and that 100%
                    // is never attainable. 0 score is 0% match;
                    // The plot we use is based on what looks about right, this is purely guessing
                    // 100 - 5000 / (score + 50)

                    return (
                      <p>
                        {Math.floor(100 - 5000 / (plant._score + 50))}% match
                      </p>
                    );
                  })()
                : (() => {
                    const score = plant._score;

                    const stars: React.ReactNode[] = [];

                    let i = 0;
                    //Note stars are static

                    for (; i < Math.floor(score / 2); i++) {
                      stars.push(<BsStarFill key={i}></BsStarFill>);
                    }

                    if (Math.floor(score) % 2) {
                      stars.push(<BsStarHalf key={i}></BsStarHalf>);
                    }

                    for (let i = stars.length; i < 5; i++) {
                      stars.push(<BsStar key={i}></BsStar>);
                    }

                    return stars;
                  })()}
            </div>
          </div>
        </div>
      </Link>
      {user && user.password ? (
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
          <Link to="/log-in" className="add-plant-button-no-user-message s">
            <button className="form">Sign in to add plant</button>
          </Link>
        </div>
      )}
    </li>
  );
}
