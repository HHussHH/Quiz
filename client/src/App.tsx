import GamePage from "./pages/Game/GamePage";
import HomePage from "./pages/Home/HomePage";
import { Routes, Route, useLocation } from "react-router-dom";
import SearchGamePage from "./pages/SearchGame/SearchGamePage";
import { useEffect } from "react";
import { useAppDispatch } from "./store";
import { setClearList } from "./features/question/quest-slice";
import { setFinish } from "./features/endGame/finishSlice";
import { setClearCurrentAnswer } from "./features/selectAnswer/answer-slice";
function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (location.pathname !== "/game") {
      dispatch(setClearList([]));
      dispatch(setFinish(false));
      dispatch(setClearCurrentAnswer());
    }
  }, [location.pathname]);
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
