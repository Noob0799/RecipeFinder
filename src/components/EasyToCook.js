import RecipeCard from "./RecipeCard";
import { getEasyRecipes } from "../redux/thunks/recipes";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "./Loading";
import NoData from "./NoData";

const EasyToCook = () => {
  const dispatch = useDispatch();
  const { easyRecipes, loading } = useSelector((state) => state.recipes);
  useEffect(() => {
    dispatch(getEasyRecipes());
  }, []);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
  };
  return (
    <div className="easy-to-cook-container">
      {loading ? (
        <Loading />
      ) : easyRecipes.length ? (
        <Slider {...settings}>
          {easyRecipes.map((recipe) => (
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

export default EasyToCook;
