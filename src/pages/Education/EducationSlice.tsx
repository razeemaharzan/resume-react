import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EducationState {
    id: string;
    degree: string;
    fieldOfStudy: string;
    institution: string;
    startDate: string;
    endDate: string;
}

const initialEducationState: EducationState = {
    id: crypto.randomUUID(),
    degree: '',
    fieldOfStudy: '',
    institution: '',
    startDate: '',
    endDate: ''
}

const educationSlice = createSlice({
    name: "education",
    initialState: [initialEducationState],
    reducers: {
        // setEducations: (state, action: PayloadAction<Partial<EducationState[]>>) => {
        //     return { ...state, ...action.payload };
        // },
        setEducations: (state, action: PayloadAction<EducationState[]>) => {
            return action.payload; // Replace the state with the new array
        },
        addNewEducation: (state, action: PayloadAction<EducationState>) => {
            state.push(action.payload); // Add a single education entry
        },
        updateEducation: (
            state,
            action: PayloadAction<{ id: string; updatedData: Partial<EducationState> }>
        ) => {
            const { id, updatedData } = action.payload;
            const index = state.findIndex((edu) => edu.id === id);
            if (index !== -1) {
                state[index] = { ...state[index], ...updatedData };
            }

        },
        deleteEducation: (state, action: PayloadAction<string>) => {
            return state.filter((edu) => edu.id !== action.payload); // Remove by id
        },
    }

})

export const { setEducations, addNewEducation, updateEducation, deleteEducation } = educationSlice.actions;
export default educationSlice.reducer;