import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import RecipeDetails from "./pages/RecipeDetails";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getFavourites, clearSearch } from "./redux/slices/recipesSlice";
import { useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import AllRecipes from "./components/AllRecipes";
import TopRated from "./components/TopRated";
import EasyToCook from "./components/EasyToCook";
import Loading from "./components/Loading";

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
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
          <Route path="/home" element={<Home />} >
            <Route index element={<Navigate to="all" />} />
            <Route path="all" element={<AllRecipes />} />
            <Route path="topRated" element={<TopRated />} />
            <Route path="easyToCook" element={<EasyToCook />} />
          </Route>
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
