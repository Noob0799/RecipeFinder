const RecipeSuggestions = ({ searchedRecipes, selectedIndex, handleClick }) => {
  return (
    <div className="suggestions-container">
      {searchedRecipes.map((recipe, idx) => (
        <div
          key={recipe.id}
          className={`suggestions-item ${
            selectedIndex == idx ? "selected" : ""
          }`}
          onClick={() => handleClick(recipe.id)}
        >
          <div className="img-container">
            <img src={recipe.image} alt={recipe.name} />
          </div>
          <p>{recipe.name}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeSuggestions;
