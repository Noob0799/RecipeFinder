import RecipeCard from "./RecipeCard";
import { getTopRatedRecipes } from "../redux/thunks/recipes";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "./Loading";
import NoData from "./NoData";

const TopRated = () => {
  const dispatch = useDispatch();
  const { topRatedRecipes, loading } = useSelector((state) => state.recipes);
  useEffect(() => {
    dispatch(getTopRatedRecipes());
  }, []);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
  };
  return (
    <div className="top-rated-container">
      {loading ? (
        <Loading />
      ) : topRatedRecipes.length ? (
        <Slider {...settings}>
          {topRatedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              parentComponent={"Home"}
            />
          ))}
        </Slider>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default TopRated;
