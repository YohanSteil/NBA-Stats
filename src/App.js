import Main from './Components/Main/Main.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import OneTeam from './Components/OneTeam/OneTeam.tsx';
import OnePlayer from './Components/OnePlayer/OnePlayer.tsx';
import AllPlayers from './Components/AllPlayers/AllPlayers.tsx';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/oneTeam/:slug" element={<OneTeam />} />
            <Route path="/onePlayer/:id" element={<OnePlayer />} />
            <Route path="/allPlayers" element={<AllPlayers />} />
        </Routes>
    </Router>
);
}

export default App;
