const Form = () => {
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
      <input type="radio" name={color} value={color} />
      <label for={color}>{color}</label>
    </>
  ));
  return (
    <>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" />
      <label for="speed">Speed (mph)</label>
      <input type="text" id="speed" name="speed" />
      <div>
        {colorInputs}
      </div>
    </>
  );
};

export default Form;
