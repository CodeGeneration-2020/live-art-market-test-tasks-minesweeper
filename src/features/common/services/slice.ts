import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICell } from "./../types/index";

export interface IGlobalState {
  board: IInitialState;
}

interface IInitialState {
  locations: ICell[][] | [];
  isGameOver: boolean;
  isGameRunning: boolean;
}

const initialState: IInitialState = {
  locations: [],
  isGameOver: false,
  isGameRunning: false,
};

export const boardSlice = createSlice({
  name: "board",
  initialState: initialState,
  reducers: {
    setIsGameOver: (state, action: PayloadAction<boolean>) => {
      state.isGameOver = action.payload;
    },
    setIsGameRunning: (state, action: PayloadAction<boolean>) => {
      state.isGameRunning = action.payload;
    },
    setNewLocations: (state, action: PayloadAction<[] | ICell[][]>) => {
      state.locations = action.payload;
    },
  },
});

export const { setIsGameOver, setIsGameRunning, setNewLocations } =
  boardSlice.actions;

export default boardSlice.reducer;
