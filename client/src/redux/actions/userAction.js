import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../../http/userService"

export const register = createAsyncThunk(
    "user/register",
    async (data, thunkAPI) => {
      try {
        return await userService.register(data);
      } catch (error) {
        console.error(error);
    
        (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  
  // Login user
  export const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
    try {
      return await userService.login(data);
    } catch (error) {
      console.error(error);
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  });