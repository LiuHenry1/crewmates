import { Link } from "react-router-dom";

const Card = ({ crewmate }) => {
  return (
    <div className={`crewmate ${crewmate.color.toLowerCase()}`}>
      <Link to={`/detail/${crewmate.id}`}>
        <img src="src/assets/crewmate.png" width={200} height={200} />
        <h4>Name: {crewmate.name} </h4>
        <h4>Speed: {crewmate.speed} </h4>
        <h4>Color: {crewmate.color} </h4>
      </Link>
      <Link to={`/edit/${crewmate.id}`}>
        <input type="submit" className="button-84" value="Edit/Delete" />
      </Link>
    </div>
  );
};

export default Card;
