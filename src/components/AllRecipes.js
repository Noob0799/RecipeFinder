import RecipeCard from "./RecipeCard";
import { getAllRecipes } from "../redux/thunks/recipes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import NoData from "./NoData";
import Pagination from "./Pagination";

const AllRecipes = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { recipes, totalNumberOfPages, loading } = useSelector(
    (state) => state.recipes
  );
  useEffect(() => {
    fetchAllRecipes();
  }, []);
  useEffect(() => {
    fetchAllRecipes();
  }, [currentPage]);
  const fetchAllRecipes = () => {
    dispatch(getAllRecipes(currentPage));
  };
  const updateCurrentPage = (newPage) => setCurrentPage(newPage);
  return (
    <>
      <div className="all-recipes-container">
        {loading ? (
          <Loading />
        ) : recipes.length ? (
          <>
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                parentComponent={"Home"}
              />
            ))}
          </>
        ) : (
          <NoData />
        )}
      </div>
      {totalNumberOfPages > 1 && (
        <Pagination
          currentPage={currentPage}
          updateCurrentPage={updateCurrentPage}
          totalNumberOfPages={totalNumberOfPages}
        />
      )}
    </>
  );
};

export default AllRecipes;
