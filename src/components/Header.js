import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

const Header = () => {
  const { pathname } = useLocation();
  const { favouritesCount } = useSelector((state) => state.recipes);

  return (
    <header>
      {pathname === "/" && (
        <>
          <div>Recipe Finder</div>
          <SearchBar />

          <div>
            <Link to="/favourites">
              Favourites({favouritesCount}) <i className="fa-solid fa-heart"></i>
            </Link>
          </div>
        </>
      )}
      {pathname === "/favourites" && (
        <>
          <div>
            <Link to="/">Home</Link>
          </div>
        </>
      )}
      {pathname.includes("/recipeDetails") && (
        <>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/favourites">
              Favourites({favouritesCount}) <i className="fa-solid fa-heart"></i>
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
