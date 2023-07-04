import { createSlice } from '@reduxjs/toolkit';

const loader = {
    isLoading: false,
};

const loaderSlice = createSlice({
    name: 'loaderSlice',
    initialState: loader,
    reducers: {
        setIsLoading(state, action){
            state.isLoading = action.payload;
        },
    }
});

export const { setIsLoading } = loaderSlice.actions;
export default loaderSlice;