import { createSlice } from '@reduxjs/toolkit';

const totalMembersData = {
    totalMembers: 0,
};

const totalMemberSlice = createSlice({
    name: 'totalMemberSlice',
    initialState: totalMembersData,
    reducers: {
        setTotalMembers(state, action) {
            state.totalMembers = action.payload;
        },
    }
});

export const { setTotalMembers } = totalMemberSlice.actions;
export default totalMemberSlice;