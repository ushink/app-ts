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

// сделай мне типы которые возвращают в итоге функции
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];