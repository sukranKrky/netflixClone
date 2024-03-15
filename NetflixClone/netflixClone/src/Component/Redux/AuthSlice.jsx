import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Link } from "react-router-dom";



const initialState = {
  userName: "",
  password: "",
  token: "",
  loading: false,
  isLoggedIn: false,
  error: null,
};
export const loginUser = createAsyncThunk(
  "user/login",
  async ({ userName, password }) => {
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username: userName,
          password: password
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      return response.data; 
    } catch (error) {
      throw new Error("Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginPending(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.isLoggedIn = true;
      state.userName = action.payload.username;
      state.token = action.payload.token;

    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginPending, loginSuccess, loginFailure, logoutSuccess } =
  authSlice.actions;
export default authSlice.reducer;



// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   userName: "",
//   password:"",
//   token: "",
//   loading: false,
//   isLoggedIn: false,
//   error: null
// };

// export const loginUser = createAsyncThunk(
//   "user/login",
//   async ({ userName:username,password: password }) => {
//     try {
//       const response = await fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({

//           username,
//           password
//         })

//       })
//       .then(res => res.json())
//       .then(console.log, );
//       console.log(response);

//       const data = await response.json();
//       return data;

//     } catch (error) {
//       throw Error("Login failed");
//     }

//   }

// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState,

//   reducers: {
//     loginSuccess(state) {
//       state.isLoggedIn = true;
//     },
//     logoutSuccess(state) {
//       state.isLoggedIn = false;
//     }

//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.userName = action.payload.username;
//         state.token = action.payload.token;
//         localStorage.setItem("userName", JSON.stringify(action.payload.username));
//         localStorage.setItem("token", JSON.stringify(action.payload.token));

//     console.log("addCase calişti");
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });

//   }
// });

// export const { loginSuccess, logoutSuccess } = authSlice.actions;
// export default authSlice.reducer;
