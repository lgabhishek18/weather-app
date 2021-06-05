import React from "react";
import { useSelector } from "react-redux";
import ViewWeather from "./Components/ViewWeather";
import SelectCity from "./Components/SelectCity";
import { CityName } from "./weather/SliceWeather";

function App() {
  const city = useSelector(CityName);

  return (
    <div className='d-flex flex-column min-vh-100 p-5' style={{ backgroundColor: "orange" }}>
      {city ? <ViewWeather city={city} /> : <SelectCity />}
    </div>
  );
}

export default App;
