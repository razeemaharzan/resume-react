import createGenericSlice from "../CommonSlice";
import {IState} from "../CommonSlice";

export interface InterestState extends IState{
    interest: string;
    
}

const initialInterestState: InterestState = {
    id: crypto.randomUUID(),
    interest: ""
}

const interestSlice = createGenericSlice<InterestState>("interest", initialInterestState);




export const { updateItem} = interestSlice.actions;
export default interestSlice.reducer;