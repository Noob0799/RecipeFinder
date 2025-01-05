import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../redux/thunks/recipes";
import { addToFavourites, removeFromFavourites } from "../redux/slices/recipesSlice";

const RecipeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedRecipe, favourites, loading } = useSelector(
    (state) => state.recipes
  );

  useEffect(() => {
    dispatch(getRecipe(id));
  }, []);

  const addClick = () => {
    dispatch(addToFavourites(selectedRecipe));
  };
  const removeClick = () => {
    dispatch(removeFromFavourites(selectedRecipe.id));
  };

  return (
    <>
      {loading ? (
        <div className="recipe-details-container loading-container">
          <h1>
            <i className="fa-solid fa-spinner"></i> Loading...
          </h1>
        </div>
      ) : selectedRecipe ? (
        <div className="recipe-details-container">
          <div className="recipe-details-left">
            <div className="btn-container">
              <div className="tags-container">
                <b>Tags: </b>
                {selectedRecipe.tags.map((tag) => (
                  <div key={tag} className="tags">
                    {tag}
                  </div>
                ))}
              </div>
              {favourites.findIndex(
                (oRecipe) => oRecipe.id === selectedRecipe.id
              ) === -1 ? (
                <button className="add-to-favourites" onClick={addClick}>
                  Add To Favourites
                </button>
              ) : (
                <button
                  className="remove-from-favourites"
                  onClick={removeClick}
                >
                  Remove From Favourites
                </button>
              )}
            </div>
            <div>
              <b>Name: </b>
              {selectedRecipe.name}
            </div>
            <div>
              <b>Cuisine: </b>
              {selectedRecipe.cuisine}
            </div>
            <div>
              <b>Meal Type: </b>
              {selectedRecipe.mealType.join(", ")}
            </div>
            <div>
              <b>Difficulty: </b>
              {selectedRecipe.difficulty}
            </div>
            <div>
              <b>Rating: </b>
              {selectedRecipe.rating}/5
            </div>
            <div>
              <b>Review Count: </b>
              {selectedRecipe.reviewCount}
            </div>
            <div>
              <b>Calories Per Serving: </b>
              {selectedRecipe.caloriesPerServing}
            </div>
            <div>
              <b>Preparation Time: </b>
              {selectedRecipe.prepTimeMinutes} minutes
            </div>
            <div>
              <b>Cooking Time: </b>
              {selectedRecipe.cookTimeMinutes} minutes
            </div>
            <div>
              <b>Ingredients:</b>
              <br />
              <ul>
                {selectedRecipe.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <b>Instructions:</b>
              <br />
              <ul>
                {selectedRecipe.instructions.map((instruction) => (
                  <li key={instruction}>{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="recipe-details-right">
            <img src={selectedRecipe.image} alt={selectedRecipe.name} />
          </div>
        </div>
      ) : (
        <div className="recipe-details-container no-data-available">
          No Data Available
        </div>
      )}
    </>
  );
};

export default RecipeDetails;
