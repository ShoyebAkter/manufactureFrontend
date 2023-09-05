import { getDistance } from "geolib";
import { useEffect, useState } from "react";

const useLocation=()=>{
    const[lat,setLat]=useState("")
    const[long,setLong]=useState("")
    
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    const success=(pos)=> {
      var crd = pos.coords;
      setLat(crd.latitude);
      setLong(crd.longitude)
      // console.log("Your current position is:");
      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      // console.log(`More or less ${crd.accuracy} meters.`);
    }
    
    const errors=(err)=> {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    useEffect(()=>{
      if (navigator.geolocation) {
        navigator.permissions
          .query({ name: "geolocation" })
          .then(function (result) {
            if (result.state === "granted") {
              console.log(result.state);
              //If granted then you can directly call your function here
              navigator.geolocation.getCurrentPosition(success);
            } else if (result.state === "prompt") {
              console.log(result.state);
              navigator.geolocation.getCurrentPosition(success, errors, options);
            } else if (result.state === "denied") {
              //If denied then you have to show instructions to enable location
            }
            result.onchange = function () {
              console.log(result.state);
            };
          });
      } else {
        alert("Sorry Not available!");
      }
    
    },[])

    
    const distance=getDistance(
        { latitude:lat, longitude: long },
        { latitude: "22.354550525464308", longitude: " 91.85153975824755" }
    );
    // console.log(distance);
    return distance
}
export default useLocation