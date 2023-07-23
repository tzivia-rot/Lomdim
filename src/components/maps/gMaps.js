import React, { useMemo } from "react";
// import { useState, useRef, useEffect } from "react";
import {
  //   GoogleMap,
  useLoadScript,
  //   Marker,
  //   useJsApiLoader,
  //   InfoWindow,
} from "@react-google-maps/api";
// import { formatRelative } from "date-fns";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const libraries = ["places"];
// const mapContainerStyle = {
//   width: "100vw",
//   height: "100vh",
// };

// const center = {
//   lat: 31.046051,
//   lng: 34.851612,
// };

// const options = {
//   disableDefaultUI: true,
//   zoomControl: true,
// };

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyB1fzUiPBSl8DdWLKMeTDyTUVdnclkYWjs",
    libraries,
  });

  const mapRef = React.useRef();
  
  //   const [markers, setMarkers] = React.useState([]);
  //   const [selected, setSelected] = React.useState(null);

  //   const onMapClick = React.useCallback((event) => {
  //     setMarkers((current) => [
  //       ...current,
  //       {
  //         lat: event.latLng.lat(),
  //         lng: event.latLng.lng(),
  //         time: new Date(),
  //       },
  //     ]);
  //   }, []);


  //כשהמפה מתרנדרת
  //   const onMapLoad = React.useCallback((map) => {
  //     mapRef.current = map;
  //   }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "loading maps";

  return (
    <div>
      <Search panTo={panTo} />
      {/* <Locate panTo={panTo} /> */}
      {/* <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
     
      </GoogleMap> */}
    </div>
  );
}

// function Locate({ panTo }) {
//   return (
//     <button
//       className="locate"
//       onClick={() => {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             panTo({
//               lat: position.coords.latitude,
//               lng: position.coords.longitude,
//             });
//           },
//           () => null,
//           options
//         );
//       }}
//     >
//       <img src="compass.svg" alt="compass - locate me" />
//     </button>
//   );
// }

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearsuggestion,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => 31.046051,

        lng: () => 34.851612,
      },
      radius: 200 * 1000,
    },
  });

  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          //עשה שגיאה - כיבנו ונבדוק אח"כ
          // clearsuggestion();
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
          } catch (error) {
            console.log("error!");
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="מיקום"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
