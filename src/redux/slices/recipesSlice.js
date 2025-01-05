import { createSlice } from "@reduxjs/toolkit";
import { getAllRecipes, getTopRatedRecipes, getEasyRecipes, getRecipe, getSearchedRecipes } from "../thunks/recipes";

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    totalNumberOfPages: 0,
    topRatedRecipes: [],
    easyRecipes: [],
    favourites: [],
    favouritesCount: 0,
    searchedRecipes: [],
    selectedRecipe: null,
    loading: false,
  },
  reducers: {
    getFavourites: (state, action) => {
      if(!state.favourites.length) {
        const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
        state.favourites = storedFavourites ? storedFavourites : [];
      }
      state.favouritesCount = state.favourites.length;
    },
    addToFavourites: (state, action) => {
      state.favourites = [...state.favourites, action.payload];
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
      state.favouritesCount = state.favourites.length;
    },
    removeFromFavourites: (state, action) => {
      state.favourites = state.favourites.filter(
        (recipe) => recipe.id !== action.payload
      );
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
      state.favouritesCount = state.favourites.length;
    },
    clearSearch: (state, action) => {
      state.searchedRecipes = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllRecipes.fulfilled, (state, action) => {
      state.recipes = action.payload.recipes;
      state.totalNumberOfPages = Math.ceil(action.payload.total / 12);
      state.loading = false;
    });
    builder.addCase(getAllRecipes.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getTopRatedRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTopRatedRecipes.fulfilled, (state, action) => {
      state.topRatedRecipes = action.payload.recipes.filter(
        (recipe) => Number(recipe.rating) >= 4
      );
      state.loading = false;
    });
    builder.addCase(getTopRatedRecipes.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getEasyRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEasyRecipes.fulfilled, (state, action) => {
      state.easyRecipes = action.payload.recipes.filter(
        (recipe) => recipe.difficulty === "Easy"
      );
      state.loading = false;
    });
    builder.addCase(getEasyRecipes.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getRecipe.pending, (state) => {
      state.loading = true;
      state.selectedRecipe = null;
    });
    builder.addCase(getRecipe.fulfilled, (state, action) => {
      state.selectedRecipe = action.payload;
      state.loading = false;
    });
    builder.addCase(getRecipe.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getSearchedRecipes.fulfilled, (state, action) => {
      state.searchedRecipes = action.payload.recipes;
    });
  },
});

export const { getFavourites, addToFavourites, removeFromFavourites, clearSearch } = recipesSlice.actions;
export default recipesSlice.reducer;
