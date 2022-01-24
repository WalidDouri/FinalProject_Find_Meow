import React from 'react';
import { 
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  useJsApiLoader
  } from '@react-google-maps/api';

// import { formatRelativePath } from 'date-fns'
// import usePlacesAutoComplete, { getGeocode, getLatLng} from 'use-places-auto-complete';
// import {
  // Combobox, 
  // ComboboxInput, 
  // ComboboxPopover, 
  // ComboboxList, 
  // CombboxOption} 
  // from '@reach/combobox';@

// import '@react/combobox/styles.csss'

import MapStyles from './MapStyles'

// const libraries = ['places']
const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
const mapContainerStyle = {
  width: '600px',
  height: '400px'
};

const center = {
  lat:43.653225, 
  lng:-79.383186,
}

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15
}

const onLoad = infoWindow => {
  console.log('infoWindow: ', infoWindow)
}

const position = { lat: 43.653, lng: -80.214 }

const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
}



export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey
  })

  return isLoaded ? (
    <div>
      <h1>FIND Me-Oow</h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={9}
        options={options} 
      >
        {/* {parkData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0]
          }}
          onClick={() => {
            setSelectedPark(park);
          }}
          icon={{
            url: `../images/map_missingcat`,
            scaledSize: new window.google.maps.Size(25, 25)
          }}
        />
      ))} */}

        {/* <InfoWindow
          onLoad={onLoad}
          position={{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0],
          }}
          // Function is used to reset the info window if the x button is clicked - change set state
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          >
           <div style={divStyle}>
              <h1>InfoWindow</h1>
            </div>
          </InfoWindow> */}

        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      </div>
  ) : <></>
};



