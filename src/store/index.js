import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import authReducer from "@/features/auth/authSlice";
import { productApi } from "@/services/product";
import persistStore from "redux-persist/es/persistStore";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "@/services/user";

const rootConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  [productApi.reducerPath]: productApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

const store = configureStore({
  reducer: persistReducer(rootConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      // logger,
      productApi.middleware,
      userApi.middleware
    ),
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
export default store;
