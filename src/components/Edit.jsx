import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";

const Edit = ({ data }) => {
  const [crewmate, setCrewmate] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (data) {
      const toEdit = data.filter((item) => item.id == id)[0];
      setCrewmate(toEdit);
    }
  }, [data]);

  if (crewmate == null) return null;

  const colors = [
    "Red",
    "Green",
    "Blue",
    "Purple",
    "Yellow",
    "Orange",
    "Pink",
    "Rainbow",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedCrewmate = {
      ...crewmate,
      [name]: value,
    };

    setCrewmate(updatedCrewmate);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    await supabase
      .from("Crewmates")
      .update({
        name: crewmate.name,
        speed: crewmate.speed,
        color: crewmate.color,
      })
      .eq("id", id);

    window.location = `/edit/${id}`;
  };

  const colorInputs = colors.map((color) => (
    <>
      <input
        checked={color === crewmate.color}
        onChange={handleChange}
        type="radio"
        name="color"
        value={color}
      />
      <label for={color}>{color}</label>
    </>
  ));

  console.log(crewmate);

  return (
    <>
      {crewmate && (
        <form>
          <label for="name">Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={crewmate.name}
          />
          <label for="speed">Speed (mph)</label>
          <input
            onChange={handleChange}
            type="text"
            name="speed"
            value={crewmate.speed}
          />
          <div>{colorInputs}</div>
          <input
            onClick={handleClick}
            type="submit"
            value="Submit"
          />
        </form>
      )}
    </>
  );
};

export default Edit;
