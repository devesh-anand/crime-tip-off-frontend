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
    positions: props.heatmapDataPosition,
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
    <div style={{ height: "100vh", width: "100%" }}>
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
