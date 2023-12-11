import './App.css';
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import GameSetup from "./pages/GameSetup";
import HowToPlay from "./pages/HowToPlay";
import Results from "./pages/Results";
import Stats from "./pages/Stats";

function App() {
  const router = createHashRouter([
    {
      path: "",
      element: <Home />
    },
    {
      path: "game",
      element: <Game />,
    },
    {
      path: "gameSetup",
      element: <GameSetup />
    },
    {
      path: "howToPlay",
      element: <HowToPlay />
    },
    {
      path: "results",
      element: <Results />
    },
    {
      path: "stats",
      element: <Stats />
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
