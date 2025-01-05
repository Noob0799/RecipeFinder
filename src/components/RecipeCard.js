import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../redux/slices/recipesSlice";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe, parentComponent }) => {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.recipes);
  const addClick = (e) => {
    e.preventDefault();
    dispatch(addToFavourites(recipe));
  };
  const removeClick = (e) => {
    e.preventDefault();
    dispatch(removeFromFavourites(recipe.id));
  };
  return (
    <Link to={`/recipeDetails/${recipe.id}`}>
      <div className="recipe-card">
        <div className="recipe-card-top">
          <img src={recipe.image} alt={recipe.name} />
        </div>
        <div className="recipe-card-bottom">
          <div className="recipe-name">{recipe.name}</div>
          <div>
            <b>Cuisine: </b>
            {recipe.cuisine}
          </div>
          <div>
            <b>Difficulty: </b>
            {recipe.difficulty}
          </div>
          <div>
            <b>Rating: </b>
            {recipe.rating}/5
          </div>
          {parentComponent === "Home" &&
          favourites.findIndex((oRecipe) => oRecipe.id === recipe.id) === -1 ? (
            <button className="add-to-favourites" onClick={(e) => addClick(e)}>
              Add To Favourites
            </button>
          ) : (
            <button className="remove-from-favourites" onClick={(e) => removeClick(e)}>
              Remove From Favourites
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
