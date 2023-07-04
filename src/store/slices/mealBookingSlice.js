import { createSlice } from '@reduxjs/toolkit';

let mealBookingData = {

};

const mealBookingSlice = createSlice({
    name: 'mealBookingSlice',
    initialState: mealBookingData,
    reducers:{
        setMealBookingData(state, action){
            return state = action.payload;
        }
    }
});

export const { setMealBookingData } = mealBookingSlice.actions;
export default mealBookingSlice;