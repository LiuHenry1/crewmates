import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailedView = ({ data }) => {
  const [crewmate, setCrewmate] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    if (data) {
      const toView = data.filter((item) => item.id == id)[0];
      setCrewmate(toView);
    }
  });

  if (crewmate == null) return;

  const messages = {
    slow: "May want to consider another Crewmate, this one is kind of slow.",
    moderate: "Fast enough, this Crewmate can do the job.",
    fast: "This Crewmate is super fast, will be useful."
  }

  let message;
  if (crewmate.speed <= 10) {
    message = messages.slow;
  } else if (crewmate.speed <= 20) {
    message = messages.moderate;
  } else {
    message = messages.fast;
  }

  return (
    <>
      {crewmate && (
        <div className="detailed-view">
          <h1>Crewmate: {crewmate.name}</h1>
          <h2>Stats:</h2>
          <h4>Speed: {crewmate.speed} mph</h4>
          <h4>Color: {crewmate.color}</h4>
          <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default DetailedView;
