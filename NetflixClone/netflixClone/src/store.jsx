
import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./Component/Redux/AuthSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice
  }
});

export default store;