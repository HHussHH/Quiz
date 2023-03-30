import GamePage from "./pages/Game/GamePage";
import HomePage from "./pages/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import SearchGamePage from "./pages/SearchGame/SearchGamePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="search-game" element={<SearchGamePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="*" element={<h1>Этой страницы не существует!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
