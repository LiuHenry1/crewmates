import { useState, useEffect } from "react";
import Card from "./Card";

const Gallery = ({ data }) => {
  const [crewmates, setCrewmates] = useState(null);

  useEffect(() => {
    setCrewmates(data);
  }, [data]);

  return (
    <>
      <h1>Your Crewmates gallery</h1>
      <div className="gallery">
        {crewmates &&
          crewmates.map((crewmate) => {
            return <Card crewmate={crewmate} />;
          })}
      </div>
    </>
  );
};

export default Gallery;
