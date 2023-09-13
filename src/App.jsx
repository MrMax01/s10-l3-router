import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyNav from "./components/MyNav";
import Home from "./components/Home";
import TVShows from "./components/TVShows";
import DetailFilm from "./components/DetailFilm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/menu/description/:idFilm" element={<DetailFilm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
