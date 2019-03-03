import React, { Component } from "react";
import WebglCheck from "../WebglCheck/WebglCheck";
import {
  MapboxProvider,
  MapGL,
  Layer,
  LoadImages,
  Control
} from "@react-mapboxgl/core";
import "./MapBox.scss";

const defaults = {
  style: "mapbox://styles/usj/cjscf2cys09pp1fluqifznm4d",
  zoom: 14,
  padding: 30,
  containerStyle: {
    width: "100%",
    height: "100%",
    zIndex: 1
  },
  dragRotate: false
};

class MapBox extends Component {
  state = {
    center: [9.991066, 57.012345],
    zoom: 14
  };

  map;

  render() {
    return WebglCheck() ? (
      <div style={{ height: "100%", width: "100%" }} className="map-container">
        <MapboxProvider accessToken="pk.eyJ1IjoidXNqIiwiYSI6ImNqb3R1Ym0xcTExejgzc25yN3FzZnp2djUifQ.30m9yrcu7he0TkJDapdQPA">
          <MapGL
            {...defaults}
            center={this.state.center}
            zoom={this.state.zoom}
          >
            <LoadImages needle={require("../../Images/Marker.png")}>
              <Layer
                id="teams"
                type="symbol"
                source={{
                  id: "teams",
                  type: "geojson",
                  data: {
                    type: "FeatureCollection",
                    features: [
                      {
                        type: "Feature",
                        geometry: {
                          type: "Point",
                          coordinates: [9.991066, 57.012345]
                        },
                        properties: {
                          title: "San Fransisco Giants",
                          "icon-image": "needle"
                        }
                      }
                    ]
                  }
                }}
                layout={{
                  "icon-image": "{icon-image}"
                }}
              />
            </LoadImages>
            <Control type="Navigation" position="bottom-left" />
          </MapGL>
        </MapboxProvider>
        <img
          className="flytoimage"
          src={require("../../Images/favicon-32x32.png")}
          alt=""
          onClick={() => {
            this.setState(
              {
                center: [9.991066, 57.12345],
                zoom: 15
              },
              () =>
                this.setState({
                  center: [9.991066, 57.012345],
                  zoom: 14
                })
            );
          }}
        />
      </div>
    ) : (
      <div>
        <img src={require(`../../Images/Map.png`)} alt=""/>
      </div>
    );
  }
}

export default MapBox;
