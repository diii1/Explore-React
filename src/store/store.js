import { combineReducers } from "redux";
import passengerSlice from "./passengerSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";

const reducers = combineReducers({
    passenger: passengerSlice
})

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({reducer: persistedReducer});
const persistor = persistStore(store);

export { store, persistor }