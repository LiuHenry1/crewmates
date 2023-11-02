import { useState } from "react";
import { supabase } from "../client";

const Form = () => {
  const [crewmate, setCrewmate] = useState({
    name: "",
    speed: 0,
    color: "",
  });

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
      .insert({
        name: crewmate.name,
        speed: crewmate.speed,
        color: crewmate.color,
      })
      .select();

    window.location = "/new";
  };

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
  const colorInputs = colors.map((color) => (
    <>
      <input onChange={handleChange} type="radio" name="color" value={color} />
      <label for={color}>{color}</label>
    </>
  ));
  return (
    <>
      <form>
        <label for="name">Name</label>
        <input onChange={handleChange} type="text" name="name" />
        <label for="speed">Speed (mph)</label>
        <input onChange={handleChange} type="text" name="speed" />
        <div>{colorInputs}</div>
        <input onClick={handleClick} type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
