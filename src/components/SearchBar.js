import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearchedRecipes } from "../redux/thunks/recipes";
import RecipeSuggestions from "./RecipeSuggestions";
import { clearSearch } from "../redux/slices/recipesSlice";
import { useCallback, useEffect, useState } from "react";
import _debounce from "lodash/debounce";

const SearchBar = () => {
  const { searchedRecipes } = useSelector((state) => state.recipes);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchedRecipes]);

  const handleInput = (e) => {
    const searchStr = e.target.value;
    if (searchStr.length) {
      dispatch(getSearchedRecipes(e.target.value));
    } else {
      dispatch(clearSearch());
    }
  };

  const debounceInput = useCallback(_debounce(handleInput, 300), []);

  const handleClick = (id) => {
    dispatch(clearSearch());
    navigate(`/recipeDetails/${id}`);
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowUp":
        if (selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1);
        } else {
          setSelectedIndex(searchedRecipes.length - 1);
        }
        break;
      case "ArrowDown":
        if (selectedIndex < searchedRecipes.length - 1) {
          setSelectedIndex(selectedIndex + 1);
        } else {
          setSelectedIndex(0);
        }
        break;
      case "Enter":
        const id = searchedRecipes[selectedIndex].id;
        handleClick(id);
        break;
      default:
        break;
    }
  };
  return (
    <div className="search-container" onKeyDown={handleKeyDown}>
      <input
        type="text"
        className="search-bar"
        placeholder="Type recipe name to search..."
        onChange={debounceInput}
      />
      {searchedRecipes && (
        <RecipeSuggestions
          searchedRecipes={searchedRecipes}
          selectedIndex={selectedIndex}
          handleClick={handleClick}
        />
      )}
    </div>
  );
};

export default SearchBar;
