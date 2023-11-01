import { useState, useEffect } from "react";

const Gallery = ({ data }) => {
  const [crewmates, setCrewmates] = useState(null);

  useEffect(() => {
    setCrewmates(data);
  }, [data]);

  return (
    <>
      <h1>Your Crewmates gallery</h1>
      {crewmates &&
        crewmates.map((crewmate) => {
          return (
            <div className="crewmate">
              <div>Name: {crewmate.name}</div>
              <div>Speed: {crewmate.speed} mph</div>
              <div>Color: {crewmate.color}</div>
            </div>
          );
        })}
    </>
  );
};

export default Gallery;
