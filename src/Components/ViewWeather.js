import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { FetchWeather, Loading, WeatherData, SET_CITY, } from "../weather/SliceWeather";

function ViewWeather({ city }) {
  const dispatch = useDispatch();
  const loading = useSelector(Loading);
  const weatherData = useSelector(WeatherData);

  useEffect(() => {
    dispatch(FetchWeather(city));
  }, [dispatch, city]);

  const handleClick = () => {
    dispatch(SET_CITY(""));
  };

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
        <h5 className='text-light'>{weatherData.weather[0].main}</h5>
        <p className='text-white-50'>{city}</p>
        <Button variant={"outline-light"} onClick={handleClick}>Choose another city</Button>
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
