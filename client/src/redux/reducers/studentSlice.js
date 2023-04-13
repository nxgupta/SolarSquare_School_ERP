import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {addStudent, getStudents, getStudentDetails, getParentChildren, feePays, updateStudent, deleteStudent } from "../actions/studentAction"

const initialState = {
    students: [],
    student: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  };


  export const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
      togglePaidFees(state, action) {
        const paidFees = [...state.students].map((student) => student._id === action.payload ? { ...student, isFeesPaid:true } : student)
        
        return {
          ...state,
          students: paidFees
        }
      }
    },
  
    extraReducers: (builder) => {
      builder
      .addCase(addStudent.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(addStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.student = action.payload;
      })

      .addCase(addStudent.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.student = null;
        state.message = action.payload;
      })
        .addCase(getParentChildren.pending, (state) => {
          state.isLoading = true;
        })
  
        .addCase(getParentChildren.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.students = action.payload;
        })
  
        .addCase(getParentChildren.rejected, (state, action) => {
          state.isError = true;
          state.isLoading = false;
          state.students = null;
          state.message = action.payload;
        })

        .addCase(getStudents.pending, (state) => {
          state.isLoading = true;
        })
  
        .addCase(getStudents.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.students = action.payload;
        })
  
        .addCase(getStudents.rejected, (state, action) => {
          state.isError = true;
          state.isLoading = false;
          state.students = null;
          state.message = action.payload;
        })



        .addCase(feePays.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.student = action.payload;
          })

        .addCase(getStudentDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.student = action.payload;
          })

          .addCase(updateStudent.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.student = action.payload;
          })

          .addCase(deleteStudent.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
          })
  
        
    },
  });

  export const { togglePaidFees} = studentSlice.actions

  export default studentSlice.reducer
  