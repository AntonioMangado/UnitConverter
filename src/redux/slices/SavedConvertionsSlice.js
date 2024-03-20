import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    convertions: []
}

const savedConvertionsSlice = createSlice({
    name: "savedConvertions",
    initialState,
    reducers: {
        addConvertion: (state, action) => {
            state.convertions.push(action.payload);
        },
        removeConvertion: (state, action) => {
            state.convertions = state.convertions.filter((convertion) => convertion.id !== action.payload);
        }
    }
});

export const { addConvertion, removeConvertion } = savedConvertionsSlice.actions;
export default savedConvertionsSlice.reducer;