import { TileLayer, Map } from "leaflet";

const mymap = new Map("map").setView(
  [-32.03079481720597, -60.30631542205811],
  14
);

const tile1 = new TileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

tile1.addTo(mymap);
