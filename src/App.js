import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import "./styles/style.css"
import "./styles/reset.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Favourite from './pages/Favourite';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Home />} />
        <Route path="/all-movies" element={<Home />} />
        <Route path="/favourites" element={<Favourite />} />
      </Routes>
    </Router>
  );
}

export default App;
