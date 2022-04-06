import { Routes, Route } from "react-router-dom";

import HousePage from "../../pages/HousePage";
import CharactersPage from "../../pages/CharactersPage";
import Page404 from "../../pages/Page404";
import './App.scss'

function App() {
  return (
    <div className="app-container">
        <Routes>
            <Route path="/" element={<CharactersPage />} />
            <Route path="/house/:id" element={<HousePage />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    </div>
  );
}

export default App;