/* eslint-disable @typescript-eslint/no-empty-function */
/*

Reducers update the redux store.

NOTE: This should be a separate reducer file for each subset of data to be saved in the redux store.
The number of subsets will vary greatly per project

*/
// import axios, { AxiosRequestConfig } from 'axios';
import {
  createSlice,
  // createAsyncThunk /*, PayloadAction */,
} from '@reduxjs/toolkit';

// *** Data types ***
// export type SampleItemType = string;

// *** Type of the store ***
// eslint-disable-next-line @typescript-eslint/ban-types
export type SampleStateType = {};

// *** Initial state  ***
// exported ONLY for testing purposes
export const initialState: SampleStateType = {};

/* ************** Thunks *************** */
// Enter side actions like ajax calls here

/* *************** Slice ***************** */
export const SampleSlice = createSlice({
  name: 'sampleSlice', // unique name - not used in the application
  initialState,
  reducers: {
    // Add new reducer to be called in the application
    // addNewItem: (state: SampleStateType, action: PayloadAction<SampleItemType>) => {
    //   const item = action.payload;
    //   const newData = [...state.data];
    //   newData.push(item);
    //   state.data = newData;
    // },

    // NOTE this resets the state to the initial state
    // normally this isn't used in application, but can be helpful during testing
    resetStore: () => initialState,
  },
});

// Reducers that can be called in the application
export const { /* addNewItem, */ resetStore } = SampleSlice.actions;

// To be imported in the index reducer file
export default SampleSlice.reducer;
