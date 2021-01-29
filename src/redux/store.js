import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer, filterReducer } from "./contacts/contactsReducers";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// export const store = configureStore({
//   reducer: rootReducer,
// });

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),

  devtools: process.env.NODE_ENV === "development",
  middleware,
});

const persistor = persistStore(store);

export { store, persistor };
