const Card = ({crewmate}) => {
  return (
    <div className="crewmate">
      <img src="src/assets/crewmate.png" width={200} height={200} />
      <h4>Name: {crewmate.name} </h4>
      <h4>Speed: {crewmate.speed} </h4>
      <h4>Color: {crewmate.color} </h4>
    </div>
  )
}

export default Card;