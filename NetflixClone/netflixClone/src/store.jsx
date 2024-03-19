import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import AuthSlice from "./Component/Redux/AuthSlice";
import favoriteReducer from "./Component/Redux/favoriteSlice";



const store =configureStore({
  reducer:{
    auth: AuthSlice,
    favorite: favoriteReducer,
  }
})

export default store;




// import { configureStore } from "@reduxjs/toolkit";

// import AuthSlice from "./Component/Redux/AuthSlice";

// const store = configureStore({
//   reducer: {
//     auth: AuthSlice
//   }
// });

// export default store;