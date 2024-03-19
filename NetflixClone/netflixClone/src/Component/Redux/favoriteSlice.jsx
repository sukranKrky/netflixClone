import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const movieToAdd = action.payload;
      if (!state.movies.some((movie) => movie.id === movieToAdd.id)) {
        state.movies.push(movieToAdd);
      } else {
        console.log("Film zaten favori listenizde.");
      }
    },
  },
});

export const { addMovie } = favoriteSlice.actions;

export default favoriteSlice.reducer;
