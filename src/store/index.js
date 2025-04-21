import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";

import authReducer from "@/features/auth/authSlice";
import productsReducer from "@/features/products/productsSlice";
import persistStore from "redux-persist/es/persistStore";

const rootConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

const store = configureStore({
  reducer: persistReducer(rootConfig, rootReducer),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    logger,
  ],
});

export const persistor = persistStore(store);
export default store;
