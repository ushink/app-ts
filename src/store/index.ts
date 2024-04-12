import { combineReducers, configureStore } from "@reduxjs/toolkit";
import airportReducer from "./slices/airpotSlice";

const rootReducer = combineReducers({
  airport: airportReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
