import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
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
              onClick={() => navigate("/home/all")}
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
              onClick={() => navigate("/home/topRated")}
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
              onClick={() => navigate("/home/easyToCook")}
            >
              Easy To Cook <i className="fa-solid fa-face-smile"></i>
            </button>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Home;
