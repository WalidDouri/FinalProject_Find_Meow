// import React, {useState, useEffect} from 'react';
// import { 
//   GoogleMap,
//   useLoadScript,
//   Marker,
//   InfoWindow,
//   useJsApiLoader
//   } from '@react-google-maps/api';

// // import { formatRelativePath } from 'date-fns'
// // import usePlacesAutoComplete, { getGeocode, getLatLng} from 'use-places-auto-complete';
// // import {
//   // Combobox, 
//   // ComboboxInput, 
//   // ComboboxPopover, 
//   // ComboboxList, 
//   // CombboxOption} 
//   // from '@reach/combobox';@

// // import '@react/combobox/styles.csss'

// import MapStyles from './MapStyles'

// // const libraries = ['places']
// const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
// const mapContainerStyle = {
//   width: '600px',
//   height: '300px'
// };

// const center = {
//   lat:43.653225, 
//   lng:-79.383186,
// }

// // const divStyle = {
// //   background: `white`,
// //   border: `1px solid #ccc`,
// //   padding: 15
// // }

// // const onLoad = infoWindow => {
// //   console.log('infoWindow: ', infoWindow)
// // }

// // const position = { lat: 43.653, lng: -80.214 }

// const options = {
//   styles: MapStyles,
//   disableDefaultUI: true,
//   zoomControl: true,
// }



// export default function Map() {
//   const {marker, setMarker} = useState([])
//   // const {missingpet, setMissingPet} = useState([]);
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey
//   })






//   return isLoaded ? (
//     <div>
//       <h1>FIND Me-Oow</h1>
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         defaultCenter={{
//           lat: add the function that geocodes the address into lng and lat to,
//           lng:
//         }}
//         zoom={15}
//         options={options} 
        
//         >
//         {/* {markers.map((marker) => (
//           <Marker 
//             // key={marker.time.toISOString()} 
//             // position={{lat: marker.lat, lng: marker.lng}}
//           />
//         ))} */}
//         {/* {parkData.features.map(park => (
//         <Marker
//           key={park.properties.PARK_ID}
//           position={{
//             lat: park.geometry.coordinates[1],
//             lng: park.geometry.coordinates[0]
//           }}
//           onClick={() => {
//             setSelectedPark(park);
//           }}
//           icon={{
//             url: `../images/map_missingcat`,
//             scaledSize: new window.google.maps.Size(25, 25)
//           }}
//         />
//       ))} */}

//       {/* {selectedPark && (
//         <InfoWindow
//           onCloseClick={() => {
//             setSelectedPark(null);
//           }}
//           position={{
//             lat: selectedPark.geometry.coordinates[1],
//             lng: selectedPark.geometry.coordinates[0]
//           }}
//         >
//           <div>
//             <h2>{selectedPark.properties.NAME}</h2>
//             <p>{selectedPark.properties.DESCRIPTIO}</p>
//           </div>
//         </InfoWindow>
//       )} */}
        
//         <></>
//       </GoogleMap>
//       </div>
//   ) : <></>
// };



