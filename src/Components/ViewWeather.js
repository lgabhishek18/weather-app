import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchWeather, Loading, WeatherData, } from "../weather/SliceWeather";

function ViewWeather() {
  const dispatch = useDispatch();
  const loading = useSelector(Loading);
  const weatherData = useSelector(WeatherData);

  useEffect(() => {
    dispatch(FetchWeather());
  }, [dispatch]);

  const Loader = () => {
    return (
      <div className='spinner-border text-white' role='status'>
        <span className='sr-only'>Loading</span>
      </div>
    );
  };

  const WeatherUI = () => {
    return (
      <div className='p-2 d-flex flex-column align-items-center'>
        <h1 className='text-light'>{weatherData.main.temp} Degree celcius</h1>
        <h5 className='text-light'>Delhi, India</h5>
        <p className='text-white-50'>Developed By : ABHISHEK GUPTA</p>
      </div>
    );
  };

  return (
    <div style={{ height: "300px", display: "flex", justifyContent: "center", paddingTop: "50px", }}>
      {loading ? <Loader /> : <WeatherUI />}
    </div>
  );
}

export default ViewWeather;
