import React, {useState, useEffect, useContext} from 'react';
import { 
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  useJsApiLoader
  } from '@react-google-maps/api';
import { useParams } from 'react-router-dom'
import { authContext } from '../providers/Authprovider'
import MapStyles from './MapStyles'
import axios from 'axios';

// const libraries = ['places']
const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
const mapContainerStyle = {
  width: '600px',
  height: '300px'
};

const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
}



export default function Map() {
  const [catLocation, setCatLocation] = React.useState({})
  // const { user } = useContext(authContext);
  const { id } = useParams();
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey
  })

  useEffect(() => {
    axios.get(`http://localhost:3001/api/catforms/1`)
      .then((resFromDB) => {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${resFromDB.data.last_seen_postal_code}&key=AIzaSyDuquoM3MMOrjR3Gs_kJikJxh32zOZosuA`)
       .then((respFromGoogleMaps) => {
         setCatLocation(respFromGoogleMaps.data.results[0].geometry.location);
       })
       .catch(err => console.log(err))
       
       })
       .catch(error => {
           console.error('There was an error!', error);
     });
   }, [])
    
  

  return isLoaded ? (
    <div>
      <h1>FIND Me-Oow</h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={catLocation}
        zoom={15}
        options={options} 
        
        >
        
          <Marker 
            position={catLocation}
            // onClick={() => {
            //   setCatLocation(park);
            // }}
            icon={{
              // url: `..../map_missingcat.png`,
              scaledSize: new window.google.maps.Size(25, 25)
            }}
          />
        {/* <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0]
          }}
        >
          <div>
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTIO}</p>
          </div>
        </InfoWindow> */}
      )} */}
        
        <></>
      </GoogleMap>
      </div>
  ) : <></>
};



