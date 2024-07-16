import React, { useEffect, useState } from "react";

function Location(props) {
  const [cityName, setCityName] = useState([]);
  const fe = async () => {
    try {
      const result = await fetch("http://ip-api.com/json/?fields=61439").then(
        (res) => {
          return res.json();
        }
      );
      // console.log(result);
      setCityName(result);
    } catch (err) {
      console.log(err);
    }
  };
  
  
  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, positionError);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    
    function showPosition(position) {
    //   console.log(fe());
    // Success, can use position.
    fe()
    console.log("Allow this Time: " + position);
  }
  
  function positionError(error) {
    if (error.PERMISSION_DENIED) {
      console.log("Error: permission denied");
      // Your custom modal here.
      showError('Geolocation is not enabled. Please enable to use this feature.');
    } else {
      // Handle other kinds of errors.
      console.log("Other kind of error: " + error);
    }
  }
  
  function showError(message) {
    // TODO
  }
  useEffect(()=>{

      getLocation();
  },[])

  return (
    <>
      <div>
        
        {props.cityName} {cityName.city} {cityName.region}
      </div>
    </>
  );
}

export default Location;
