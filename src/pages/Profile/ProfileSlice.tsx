import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState{
    name: string;
    email: string;
    phone: string;
    role: string;
    linkedIn: string;
    address: string;
    summary: string;
}

const initialProfileState: ProfileState = {
    name: '',
    email:'',
    phone: '',
    role: '',
    linkedIn: '',
    address: '',
    summary: '',
}

const profileSlice = createSlice({
    name: "profile",
    initialState: initialProfileState,
    reducers:{
        setProfile: (state, action: PayloadAction<Partial<ProfileState>>) =>{
            return { ...state, ...action.payload };
          },
          
    }

})
export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;