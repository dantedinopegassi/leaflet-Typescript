import { Map, Popup } from "leaflet";
import { tile, pop } from "./options";

const mymap = new Map("map").setView(
  [-31.598876363018576, -60.70358276367188],
  14
);

const tile1 = tile();

const pop1 = pop(mymap, [-31.598876363018576, -60.70358276367188]);

tile1.addTo(mymap);
pop1.addTo(mymap);

mymap.on("click", (e) => {
  // alert(e.latlng.lat + "\n" + e.latlng.lng);
  console.log("huepa", e.latlng);
  pop1
    .setLatLng(e.latlng)
    .setContent(`<p>ubicacion:</br>` + e.latlng.toString() + `</p>`);
  toggle(mymap, pop1);
});

function toggle(map: Map, popup: Popup) {
  if (map.hasLayer(popup)) {
    map.closePopup(popup);
  } else {
    map.openPopup(popup);
  }
}
