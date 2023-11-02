import { useRoutes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import Edit from "./components/Edit";
import { useEffect, useState } from "react";
import { supabase } from "./client";

function App() {
  const [crewmates, setCrewmates] = useState(null);

  useEffect(() => {
    const fetchCrew = async () => {
      const {data} = await supabase 
        .from("Crewmates")
        .select()
        .order('created_at', {ascending: true});

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
    {
      path: "/edit/:id", 
      element: <Edit data={crewmates}/>
    }
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
