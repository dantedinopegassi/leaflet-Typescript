import { TileLayer, Map } from "leaflet";
import { tileOptionsMaxZoomAttribution } from "./options"

const mymap = new Map("map").setView(
  [-32.03079481720597, -60.30631542205811],
  14
);

const tile1: TileLayer = new TileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  tileOptionsMaxZoomAttribution
);

tile1.addTo(mymap);

mymap.on("click", (e) => {
  alert(e.latlng.lat + "\n" + e.latlng.lng);
});
