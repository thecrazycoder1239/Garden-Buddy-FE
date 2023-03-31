import CalendarPicker from "./CalendarPicker";

// Hooks
import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { Link, useParams } from "react-router-dom";

// API
import { postPlantToUser } from "../utils/api";

// Icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function SinglePlantCard({plant} : {plant: GrowStuffCrop}) {

    const [date, setDate] = useState(new Date());

    const [buttonActive, setButtonActive] = useState(true);
    const [buttonStyle, setButtonStyle] = useState({transition: '0s', background: '#f1f1f1'});

	const { user } = useContext(UserContext);


    function changeColor(){
            setButtonStyle({
                transition: '0.3s',
                background: '#1ec765'
            })
        }

    function fadeColor(){
        setButtonStyle({
            transition: '0.3s',
            background: '#f1f1f1'
            })
        }

	const handleClick = (e: any) => {
		e.preventDefault();
		if (user) {
            setButtonActive(false)
            changeColor();
			postPlantToUser(user, e.target.value, date).then(console.log)
            .finally(() => {
                    let timer = setTimeout(() => {
                        fadeColor();
                        setButtonActive(true)
                }, 3000)
            })
		}
		return { msg: "added" };
	};

	return (
		<li className="single-plant-container">
			<CalendarPicker date={date} setDate={setDate} />
			<Link to={`/all-plants/${plant["_id"]}`}>
				<div className="plant-card" key={plant["_id"]}>
					{user ? (
						<button
                            style={buttonStyle}
							className="add-plant-button"
							onClick={handleClick}
							value={plant["_id"]}
                            disabled={!buttonActive}
						>
							Plant!
						</button>
					) : (
						<p className="add-plant-button-no-user-message">Sign in to add plant</p>
					)}
					{/* <li onClick={() => setSinglePlant(plant["_id"])} className="plant-card" key={plant["_id"]}> */}
					<div>
						<h2>{plant["name"]}</h2>
						<p>{plant["scientific_name"]}</p>
						<div className="description-container">
							<p className="plant-description">{plant["description"]}</p>
						</div>
						<div className="votes">
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiOutlineStar />
							<AiOutlineStar />
						</div>
					</div>
					<img alt="plant" src={plant["thumbnail_url"]} />
				</div>
			</Link>
		</li>
	);
}