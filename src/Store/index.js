import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import formData from "./formDataSlice";

const reducers = combineReducers({
    formData: formData.reducer,
});

const persistConfig = {
    key: "form",
    storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
});
const store = configureStore({
    reducer: persistedReducer,
    middleware: customizedMiddleware,
});

const persistor = persistStore(store);

export { store, persistor };
