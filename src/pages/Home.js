import AllRecipes from "../components/AllRecipes";
import TopRated from "../components/TopRated";
import EasyToCook from "../components/EasyToCook";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-all-recipes-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-all-recipes"
              type="button"
              role="tab"
              aria-controls="nav-all-recipes"
              aria-selected="true"
            >
              All Recipes
            </button>
            <button
              className="nav-link"
              id="nav-top-rated-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-top-rated"
              type="button"
              role="tab"
              aria-controls="nav-top-rated"
              aria-selected="false"
            >
              Top Rated (4 & More) <i className="fa-solid fa-star"></i>
            </button>
            <button
              className="nav-link"
              id="nav-easy-to-cook-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-easy-to-cook"
              type="button"
              role="tab"
              aria-controls="nav-easy-to-cook"
              aria-selected="false"
            >
              Easy To Cook <i className="fa-solid fa-face-smile"></i>
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-all-recipes"
            role="tabpanel"
            aria-labelledby="nav-all-recipes-tab"
          >
            <AllRecipes />
          </div>
          <div
            className="tab-pane fade"
            id="nav-top-rated"
            role="tabpanel"
            aria-labelledby="nav-top-rated-tab"
          >
            <TopRated />
          </div>
          <div
            className="tab-pane fade"
            id="nav-easy-to-cook"
            role="tabpanel"
            aria-labelledby="nav-easy-to-cook-tab"
          >
            <EasyToCook />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
