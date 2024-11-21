import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SkillState {
    id: string;
    name: string;
}

const initialSkillState: SkillState = {
    id: crypto.randomUUID(),
    name: ""
}

const skillSlice = createSlice({
    name: "skill",
    initialState: [initialSkillState],
    reducers: {
        addSkill: (state, action: PayloadAction<SkillState>) => {
            state.push(action.payload); // Add a single education entry
        },
        updateSkill: (
            state,
            action: PayloadAction<{ id: string; updatedData: Partial<SkillState> }>
        ) => {
            const { id, updatedData } = action.payload;
            const index = state.findIndex((edu) => edu.id === id);
            if (index !== -1) {
                state[index] = { ...state[index], ...updatedData };
            }

        },
        deleteSkill: (state, action: PayloadAction<string>) => {
            return state.filter((edu) => edu.id !== action.payload); // Remove by id
        },
    }

})

export const { addSkill, updateSkill, deleteSkill } = skillSlice.actions;
export default skillSlice.reducer;

