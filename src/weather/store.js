import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "./SliceWeather";

export default configureStore({
  reducer: {
    weather: WeatherReducer,
  },
});
