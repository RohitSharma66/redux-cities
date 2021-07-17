import { combineReducers } from "redux";
import CitiesReducer from "./cities_reducer";
import ActiveCityReducer from "./active_city_reducer";

const rootreducers = combineReducers({
  cities: CitiesReducer,
  activeCity: ActiveCityReducer
});

export default rootreducers;
