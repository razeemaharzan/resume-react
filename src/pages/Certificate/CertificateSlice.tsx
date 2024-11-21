import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CertificateState {
    id: string;
    name: string;
    obtainedFrom: string;
}

const initialCertificateState: CertificateState = {
    id: crypto.randomUUID(),
    name: "",
    obtainedFrom: ""
}

const certificateSlice = createSlice({
    name: "certificate",
    initialState: [initialCertificateState],
    reducers: {
        addCertificate: (state, action: PayloadAction<CertificateState>) => {
            state.push(action.payload); // Add a single certificate entry
        },
        updateCertificate: (
            state,
            action: PayloadAction<{ id: string; updatedData: Partial<CertificateState> }>
        ) => {
            const { id, updatedData } = action.payload;
            const index = state.findIndex((edu) => edu.id === id);
            if (index !== -1) {
                state[index] = { ...state[index], ...updatedData };
            }

        },
        deleteCertificate: (state, action: PayloadAction<string>) => {
            return state.filter((edu) => edu.id !== action.payload); // Remove by id
        },
    }

})

export const { addCertificate, updateCertificate, deleteCertificate } = certificateSlice.actions;
export default certificateSlice.reducer;