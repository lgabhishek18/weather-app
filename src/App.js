import React from "react";
import ViewWeather from "./Components/ViewWeather";

function App() {
  return (
    <div className='d-flex flex-column min-vh-100 p-5' style={{ backgroundColor: "orange" }}>
      <ViewWeather />
    </div>
  );
}

export default App;
