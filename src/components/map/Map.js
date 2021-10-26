import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function MapPrincipal() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 41.390205, lng: 2.154007 }}
    />
  );
}

const WrapperMap = withScriptjs(withGoogleMap(MapPrincipal));

export default function Map() {
  console.log('aaa',`${process.env.REACT_APP_URL}+${process.env.REACT_APP_GOOGLE_KEY}`)
  return (
    <div style={{width:'100vw', height:'100vh'}}>
      <WrapperMap googleMapURL={`${process.env.REACT_APP_URL}${process.env.REACT_APP_GOOGLE_KEY}`}
      loadingElement={<div style={{height:"100%"}}/>} 
      containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
