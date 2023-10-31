import { useRoutes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Form from "./components/Form";
import Gallery from "./components/Gallery";

function App() {
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
      element: <Gallery />,
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
