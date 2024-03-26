import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesJobs from "../reducers/favorites"; // non serve /index, basta puntare alla cartella che lo contiene
import searchJobsReducer from "../reducers/search";

const unifiedReducers = combineReducers({
  favorite: favoritesJobs,
  search: searchJobsReducer,
});

const store = configureStore({
  reducer: unifiedReducers,
});

export default store;
