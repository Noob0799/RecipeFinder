import { useSelector } from "react-redux";
import RecipeCard from "../components/RecipeCard";

const Favourites = () => {
  const { favourites } = useSelector((state) => state.recipes);
  return (
    <>
      {favourites.length ? (
        <div className="favourites-container">
          {favourites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              parentComponent={"Favourites"}
            />
          ))}
        </div>
      ) : (
        <div className="no-favourites-available">
          <h1>No Favourites available</h1>
        </div>
      )}
    </>
  );
};

export default Favourites;
