import React, { useRef, useState } from "react";
// AIzaSyAY3hshDA-xeK7ME1UY3HDBdNAAv8UIO3k
// 28.7041° N, 77.1025° E
// DELHI
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Heatmap = (props) => {
  const mapRef = useRef(null);
  const [position, setPosition] = useState({
    lat: 28.6786794810425,
    lng: 77.26151170601337,
  });
  function handleLoad(map) {
    mapRef.current = map;
  }
  function handleCenter() {
    if (!mapRef.current) return;

    const newPos = mapRef.current.getCenter().toJSON();
    setPosition(newPos);
  }

  const heatMapData = {
    positions: [
      { lat: 28.6786794810425, lng: 77.26151170601337 },
      { lat: 28.677718522771112, lng: 77.26122447557762 },
      { lat: 28.67788158809669, lng: 77.25997174564884 },
      { lat: 28.678743875418736, lng: 77.26281848813903 },
      { lat: 28.680277544245573, lng: 77.26069274000719 },

      { lat: 28.4653410425, lng: 77.54656501337 },
      { lat: 28.8465318522771112, lng: 77.5653437762 },
      { lat: 28.5453458809669, lng: 77.7848664884 },
      { lat: 28.5435643875418736, lng: 77.1231348813903 },
      { lat: 28.54185544245573, lng: 77.54314000719 },

      { lat: 27.435410425, lng: 75.5413233 },
      { lat: 27.5435318522, lng: 75.5343437762 },
      { lat: 27.4354458809, lng: 75.65432664884 },
      { lat: 27.9868643875, lng: 75.324148814 },
      { lat: 27.5313554424, lng: 75.5313200719 },

      { lat: 29.5454543541, lng: 76.54321321 },
      { lat: 29.1221321311, lng: 76.43413512 },
      { lat: 29.5465564642, lng: 76.54211212 },
      { lat: 29.5451312214, lng: 76.12489741 },
      { lat: 29.4354165676, lng: 76.65321323 },
    ],
    options: {
      radius: 10,
      opacity: 0.6,
    },
  };

  // const [mapProp, setmapProp] = useState({
  //   apiKey: "",
  //   language: "",
  // });

  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627,
  //   },
  //   zoom: 11,
  // };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        // ref={(el) => (this._googleMap = el)}
        bootstrapURLKeys={"AIzaSyAY3hshDA-xeK7ME1UY3HDBdNAAv8UIO3k"}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        zoom={4}
        onLoad={handleLoad}
        onDragEnd={handleCenter}
        center={position}
        heatmapLibrary={true}
        heatmap={heatMapData}
        // onClick={this.onMapClick.bind(this)}
      />
    </div>
  );
};

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAY3hshDA-xeK7ME1UY3HDBdNAAv8UIO3k",
// })(Heatmap);

export default Heatmap;
