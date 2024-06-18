import { LatLngExpression, Map, Popup, TileLayer, TileLayerOptions } from "leaflet";

const tileOptionsMaxZoomAttribution: TileLayerOptions = {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
};

export const tile = () => {
  return new TileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    tileOptionsMaxZoomAttribution
  );
};

export const pop = (map: Map, latlng: LatLngExpression) => {
  return new Popup(latlng, {
    content: "<p>Hello world!<br />This is a nice popup.</p>",
  }).openOn(map);
};
