import { createSlice } from "@reduxjs/toolkit";

const snackBarSlice = createSlice({
    name:'snackbarSlice',
    initialState:{
        snackbarOpen:false,
        snackbarType:"",
        snackbarMessage:""
    },
    reducers:{
        setCustomSnackbar(state, action){
            const { snackbarOpen, snackbarType, snackbarMessage } = action.payload
            return {
                ...state,
                snackbarOpen,
                snackbarType,
                snackbarMessage
            };
        }
    }
});

export const { setCustomSnackbar } = snackBarSlice.actions;
export default snackBarSlice;