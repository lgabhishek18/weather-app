import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const SliceWeather = createSlice({
  name: "weather",
  initialState: {
    loading: true,
    city: "",
    weatherData: {},
  },
  reducers: {
    SET_WEATHER: (state, action) => {
      state.weatherData = action.payload;
      state.loading = false;
    },
    SET_CITY: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const WeatherData = (state) => state.weather.weatherData;
export const Loading = (state) => state.weather.loading;
export const CityName = (state) => state.weather.city;
export const { SET_WEATHER, SET_CITY } = SliceWeather.actions;
export const FetchWeather = (cityName) => (dispatch) => {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c7829ef56c69ba0573fd9b798e4346ea&units=metric`
    )
    .then((response) => {
      console.log(response.data.weather);
      dispatch(SET_WEATHER(response.data));
    });
};

export default SliceWeather.reducer;
