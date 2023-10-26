import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import GameSetup from "./pages/GameSetup";
import HowToPlay from "./pages/HowToPlay";
import Results from "./pages/Results";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/game" element={<Game />}></Route>
          <Route path="/gameSetup" element={<GameSetup />}></Route>
          <Route path="/howToPlay" element={<HowToPlay />}></Route>
          <Route path="/results" element={<Results />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
