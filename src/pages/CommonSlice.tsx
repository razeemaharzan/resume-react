import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IState{
    id: string;
}
function createGenericSlice<T extends IState>(name: string, initialState: T) {
    return createSlice({
        name,
        initialState,
        reducers: {
            updateItem: (
                state,
                action: PayloadAction<{ id: string; updatedData: Partial<T> }>
            ) => {
                if (state.id === action.payload.id) {
                    Object.assign(state, action.payload.updatedData);
                }
            },
        },
    });
}

export default createGenericSlice;