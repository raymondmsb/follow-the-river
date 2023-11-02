import logo from './logo.svg';
import './App.css';
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import GameSetup from "./pages/GameSetup";
import HowToPlay from "./pages/HowToPlay";
import Results from "./pages/Results";

function App() {
  const router = createHashRouter([
    {
      path: "home",
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
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
