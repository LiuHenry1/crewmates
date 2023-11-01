import { useRoutes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import { useEffect, useState } from "react";
import { supabase } from "./client";

function App() {
  const [crewmates, setCrewmates] = useState(null);

  useEffect(() => {
    const fetchCrew = async () => {
      const {data} = await supabase 
        .from("Crewmates")
        .select();

      setCrewmates(data);
    }

    fetchCrew();
  }, [])

  let main = useRoutes([
    { 
      path: "/", 
      element: <Home /> },
    {
      path: "/new",
      element: <Form />,
    },
    {
      path: "/gallery",
      element: <Gallery data={crewmates}/>,
    },
  ]);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new">Create a new Crewmate!</Link>
        <Link to="/gallery">Crewmate Gallery</Link>
      </nav>
      <div className="main">
        {main}
      </div>

    </div>
  );
}

export default App;
