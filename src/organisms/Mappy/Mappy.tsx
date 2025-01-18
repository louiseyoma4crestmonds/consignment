/*
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ReactMapGl, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  Source,
  Layer,
} from "react-map-gl";
import { MappyProps } from "./Mappy.types";

function Mappy(props: MappyProps): JSX.Element {
  const router = useRouter();
  const { lattitude, longitude, trackingId } = props;
  const [viewState, setViewState] = useState({
    longitude: Number(0),
    latitude: Number(1),
    zoom: 2,
  });

  console.log("*****************************:", Number(longitude))
  useEffect(()=>{
    if(longitude!==undefined && lattitude!==undefined){
      
      setViewState({    
        longitude: Number(longitude),
        latitude: Number(lattitude),
        zoom: 4,
      })
    }

  },[longitude])

  

  const [start, setStart] = useState([8.344225276498344, 4.947316875217527]);
  const [end, setEnd] = useState([
    router.query.destinationLatitude,
    router.query.destinationLongitude,
  ]);
  const [coords, setCoords] = useState([]);

  const getRoute = async () => {
    const responses = await axios
      .get(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=pk.eyJ1IjoibG91aXNleW9tYSIsImEiOiJjbHBwdWI4cDcxOTBoMmtxeWVycHpkdmhmIn0.ddZUYBPHT3cFTrw-mq9yWQ`
      )
      .then((res) => {
        const coordsq: any = res.data.routes[0].geometry.coordinates;

        setCoords(coordsq);
      })
      .catch((err) => err.message);
  };

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "feature",
        geometry: {
          type: "Point",
          coordinates: [lattitude, longitude],
          //coordinates: [...coords],
        },
        properties: { title: `Tracking ID: ${trackingId}` },
      },
    ],
  };

  const lineStyle = {
    id: "roadLayer",
    type: "line",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "green",
      "line-width": 4,
      "line-opacity": 0.75,
    },
  };

  useEffect(() => {
    getRoute();
  }, [lattitude, longitude]);

  return (
    <div>
      <ReactMapGl
        {...viewState}
        mapboxAccessToken="pk.eyJ1IjoibG91aXNleW9tYSIsImEiOiJjbHBwdWI4cDcxOTBoMmtxeWVycHpkdmhmIn0.ddZUYBPHT3cFTrw-mq9yWQ"
        mapStyle={"mapbox://styles/mapbox/streets-v9"}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "70vw", height: "70vh" }}
        
        
      >
        <Source id="routeSource" type="geojson" data={geojson}>
          <Layer
            id="point"
            type="circle"
            source="point"
            paint={{ "circle-radius": 10, "circle-color": "#007cbf" }}
          />
          <Layer
            id="point-label"
            type="symbol"
            source="point"
            layout={{
              "text-field": ["get", "title"],

              "text-offset": [0, 1.25],
              "text-anchor": "top",
            }}
          />
        </Source>
        <GeolocateControl />
        <FullscreenControl />
        <Marker longitude={start[0]} latitude={start[1]} />
      </ReactMapGl>
    </div>
  );
}

export default Mappy;
*/

import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { MappyProps } from "./Mappy.types";

mapboxgl.accessToken =
  "pk.eyJ1IjoibG91aXNleW9tYSIsImEiOiJjbHBwdWI4cDcxOTBoMmtxeWVycHpkdmhmIn0.ddZUYBPHT3cFTrw-mq9yWQ"; // Replace with your Mapbox token
function Mappy(props: MappyProps): JSX.Element {
  const mapContainerRef = useRef(null);
  const { lattitude, longitude, trackingId } = props;
  const mapRef = useRef(null);

  useEffect(() => {
    console.log("Lattitude: ", trackingId);
  });

  useEffect(() => {
    // Initialize Mapbox map
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40], // Initial center [lng, lat]
      zoom: 2, // Initial zoom level
    });

    // Function to zoom and lock map to a location
    const zoomAndLockToLocation = (lng, lat) => {
      // Fly to the specified location
      mapRef.current.flyTo({
        center: [lng, lat],
        zoom: 7, // Desired zoom level
        speed: 1.5, // Fly animation speed
        curve: 1.0, // Fly animation curve
      });

      mapRef.current.addSource("mySource", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [longitude, lattitude], // [longitude, latitude]
              },
              properties: {
                title: "My Point",
              },
            },
          ],
        },
      });

      mapRef.current.addLayer({
        id: "myLayer",
        type: "circle",
        source: "mySource",
        paint: {
          "circle-radius": 10,
          "circle-color": "#007cbf",
        },
      });

      // Disable user interactions
      mapRef.current.dragPan.disable();
      mapRef.current.scrollZoom.disable();
      mapRef.current.boxZoom.disable();
      mapRef.current.doubleClickZoom.disable();
      mapRef.current.touchZoomRotate.disable();
    };

    // Simulate finding a location after 3 seconds
    const timer = setTimeout(() => {
      const foundLng = Number(Math.floor(longitude)); // Example longitude
      const foundLat = Number(Math.floor(lattitude)); // Example latitude

      zoomAndLockToLocation(foundLng, foundLat);
    }, 5000);

    // Cleanup on component unmount
    return () => {
      clearTimeout(timer);
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{
        width: "100%",
        height: "500px",
      }}
    />
  );
}

export default Mappy;
