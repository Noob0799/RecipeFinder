import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import RecipeDetails from "./pages/RecipeDetails";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getFavourites, clearSearch } from "./redux/slices/recipesSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.recipes);
  useEffect(() => {
    if (!favourites.length) {
      dispatch(getFavourites());
    }
  }, []);
  const handleClick = (e) => {
    if (!e.target.closest(".suggestions-container")) {
      dispatch(clearSearch());
    }
  };
  return (
    <div className="app" onClick={handleClick}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/recipeDetails/:id" element={<RecipeDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
