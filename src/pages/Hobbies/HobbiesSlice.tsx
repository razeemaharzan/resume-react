import createGenericSlice from "../CommonSlice";
import {IState} from "../CommonSlice";

export interface HobbiesState extends IState{
    hobby: string;
}

const initialHobbyState: HobbiesState = {
    id: crypto.randomUUID(),
    hobby: ""
}

const hobbySlice = createGenericSlice<HobbiesState>("hobby", initialHobbyState);




export const { updateItem} = hobbySlice.actions;
export default hobbySlice.reducer;