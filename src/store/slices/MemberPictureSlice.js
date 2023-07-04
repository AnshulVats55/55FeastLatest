import { createSlice } from '@reduxjs/toolkit';

const memberPicture = {
    base64photo: "",
};

const memberPictureSlice = createSlice({
    name: 'memberPicture',
    initialState: memberPicture,
    reducers:{
        setMemberPicture(state, action){
            state.base64photo = action.payload;
        },
    }
});

export const { setMemberPicture } =  memberPictureSlice.actions;
export default memberPictureSlice;