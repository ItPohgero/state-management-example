import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CounterState = {
	count: number;
};

const initialState: CounterState = {
	count: 0,
};

export const counter = createSlice({
	name: "counter",
	initialState,
	reducers: {
		reset: (state) => {
			state.count = initialState.count;
		},
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
	},
});

export const { increment, decrement, reset } = counter.actions;
export default counter.reducer;
