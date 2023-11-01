const Gallery = () => {
  const crewMates = null;

  return (<>
    <h1>Your Crewmates gallery</h1>
    {crewMates ?  crewMates : <div>You haven't made a crewmate yet!</div>}
  </>)
}

export default Gallery;