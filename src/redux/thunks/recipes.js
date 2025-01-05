import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllRecipes = createAsyncThunk(
  "recipes/getAllRecipes",
  async (currentPage) => {
    const data = await fetch(`https://dummyjson.com/recipes?limit=12&skip=${(currentPage-1)*12}`);
    const result = await data.json();
    return result;
  }
);

export const getTopRatedRecipes = createAsyncThunk(
  "recipes/getTopRatedRecipes",
  async () => {
    const data = await fetch("https://dummyjson.com/recipes?limit=0");
    const result = await data.json();
    return result;
  }
);

export const getEasyRecipes = createAsyncThunk(
  "recipes/getEasyRecipes",
  async () => {
    const data = await fetch("https://dummyjson.com/recipes?limit=0");
    const result = await data.json();
    return result;
  }
);

export const getRecipe = createAsyncThunk(
  "recipes/getRecipe",
  async (id) => {
    const data = await fetch(`https://dummyjson.com/recipes/${id}`);
    const result = await data.json();
    return result;
  }
);

export const getSearchedRecipes = createAsyncThunk(
  "recipes/getSearchedRecipes",
  async (searchStr) => {
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${searchStr}&limit=10`);
    const result = await data.json();
    return result;
  }
);