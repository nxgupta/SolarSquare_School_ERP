import { createAsyncThunk } from "@reduxjs/toolkit";
import studentService from "../../http/studentService"
export const addStudent = createAsyncThunk(
    "student/addStudent",
    async (data, thunkAPI) => {
      try {
        const token = thunkAPI.getState().users.token;
      
        return await studentService.addStudent(data, token)
      } catch (error) {
        console.error(error);
    
        (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  export const  getStudents = createAsyncThunk(
    "student/getStudents",
    async (_, thunkAPI) => {
      try {
        const token = thunkAPI.getState().users.token;
        
        return await studentService.getStudents(token)
      } catch (error) {
        console.error(error);
    
        (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  export const  getStudentDetails = createAsyncThunk(
    "student/getStudentDetails",
    async (studentId, thunkAPI) => {
      try {
        const token = thunkAPI.getState().users.token;
        
        return await studentService.getStudentDetails(studentId, token)
      } catch (error) {
        console.error(error);
    
        (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  export const  getParentChildren= createAsyncThunk(
    "student/getParentChildren",
    async (data, thunkAPI) => {
      try {
        const token = thunkAPI.getState().users.token;
        
        return await studentService.getParentChildren(data, token)
      } catch (error) {
        console.error(error);
    
        (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  export const feePays = createAsyncThunk(
    "student/feePays",
    async (studentId, thunkAPI) => {
      try {
        const token = thunkAPI.getState().users.token;
      
        return await studentService.payFees(studentId, token)
      } catch (error) {
        console.error(error);
    
        (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  export const updateStudent = createAsyncThunk(
    "student/updateStudent",
    async ({ studentId, data}, thunkAPI) => {
      try {
        const token = thunkAPI.getState().users.token;
      
        return await studentService.updateStudent(studentId, data, token)
      } catch (error) {
        console.error(error);
    
        (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

  export const deleteStudent = createAsyncThunk(
    "student/deleteStudent",
    async (studentId, thunkAPI) => {
      try {
        const token = thunkAPI.getState().users.token;
      
        return await studentService.deleteStudent(studentId, token)
      } catch (error) {
        console.error(error);
    
        (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


  