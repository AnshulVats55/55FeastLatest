import { createSlice } from '@reduxjs/toolkit';

let memberData = {
    
};

const memberDataSlice = createSlice({
    name:'memberData',
    initialState: memberData,
    reducers:{
        setMemberData(state, action){
            return state = action.payload;
        },
    }
});

export const { setMemberData } =  memberDataSlice.actions;
export default memberDataSlice;