import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Owner {
  name: string;
  phone: string;
  expertise: string;
  experience: string;
}

export interface InputState {
  Owner: Owner[];
}

const initialState: InputState = {
  Owner: [],
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    showOwnerDetails: (state, action) => {
      state.Owner = [...state.Owner, action.payload];
    },
    clearOwnerDetails: (state) => {
      return initialState;
    },
    deleteOwnerDetails: (state, action: PayloadAction<number>) => {
      state.Owner.splice(action.payload, 1);
    },
    updateOwnerDetails: (
      state,
      action: PayloadAction<{ index: number; owner: Owner }>
    ) => {
      state.Owner[action.payload.index] = action.payload.owner;
    },
  },
});

export const {
  showOwnerDetails,
  clearOwnerDetails,
  deleteOwnerDetails,
  updateOwnerDetails,
} = inputSlice.actions;
export default inputSlice.reducer;
