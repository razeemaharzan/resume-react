import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ExperienceState {
    id: string;
    position: string,
    companyName: string,
    location: string,
    workModel: string,
    majorDuties: string,
    achievements: string,
    startDate: string,
    endDate: string,
    notes: string,
    heading: string;
}

const initialExperienceState: ExperienceState = {
    id: crypto.randomUUID(),
    companyName: "", 
    location: "", 
    position: '', 
    workModel: '',
     majorDuties: '', 
     achievements: '',
    startDate: '', 
    endDate: '', 
    notes: '',
    heading: ''
}

const experienceSlice = createSlice({
    name: "experience",
    initialState: [initialExperienceState],
    reducers: {

        setExperiences: (state, action: PayloadAction<ExperienceState[]>) => {
            return action.payload; // Replace the state with the new array
        },
        addExperience: (state, action: PayloadAction<ExperienceState>) => {
            state.push(action.payload); // Add a single education entry
        },
        updateExperience: (
            state,
            action: PayloadAction<{ id: string; updatedData: Partial<ExperienceState> }>
        ) => {
            const { id, updatedData } = action.payload;
            const index = state.findIndex((edu) => edu.id === id);
            if (index !== -1) {
                state[index] = { ...state[index], ...updatedData };
            }

        },
        deleteExperience: (state, action: PayloadAction<string>) => {
            return state.filter((edu) => edu.id !== action.payload); // Remove by id
        },
    }

})

export const { setExperiences, addExperience, updateExperience, deleteExperience } = experienceSlice.actions;
export default experienceSlice.reducer;