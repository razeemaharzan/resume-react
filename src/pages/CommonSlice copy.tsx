import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";

interface GenericState<T> {
    items: T[];
}

function createGenericListSlice<T>(name: string) {
    return createSlice({
        name,
        initialState: { items: [] } as GenericState<T>,
        reducers: {
            addItem: (state, action: PayloadAction<T>) => {
                state.items.push(action.payload as Draft<T>);
            },
            updateItem: (
                state,
                action: PayloadAction<{ id: string; updatedData: Partial<T> }>
            ) => {
                const { id, updatedData } = action.payload;
                const index = state.items.findIndex((item: any) => item.id === id); // Ensure `id` exists in `T`
                if (index !== -1) {
                    state.items[index] = { ...state.items[index], ...updatedData };
                }
            },
            deleteItem: (state, action: PayloadAction<string>) => {
                state.items = state.items.filter((item: any) => item.id !== action.payload); // Ensure `id` exists in `T`
            },
        },
    });
}

export default createGenericListSlice;