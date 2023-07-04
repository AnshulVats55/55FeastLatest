import { configureStore } from "@reduxjs/toolkit";
import memberDataSlice from "./slices/MemberDataSlice";
import loaderSlice from "./slices/LoaderSlice";
import memberPictureSlice from "./slices/MemberPictureSlice";
import mealBookingSlice from "./slices/mealBookingSlice";
import snackBarSlice from "./slices/SnackbarSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key:'root',
    version:1,
    storage,
};

const reducer = combineReducers(
    {
        memberDataReducer: memberDataSlice.reducer,
        memberPictureReducer: memberPictureSlice.reducer,
        mealBookingReducer: mealBookingSlice.reducer,
        loaderReducer: loaderSlice.reducer,
        snackbarReducer: snackBarSlice.reducer
    }
);

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
});

export default store;