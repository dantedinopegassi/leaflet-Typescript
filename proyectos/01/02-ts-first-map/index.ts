import { control, Map, Popup } from "leaflet";
import { pop, customTile, baselayers } from "./options";

const mymap = new Map("map").setView(
  [-31.598876363018576, -60.70358276367188],
  14
);

const base = baselayers();

const tile1 = base.a;
const tile3 = customTile("https://sig.energia.gob.ar/wmsenergia?");
const pop1 = pop(mymap, [-31.598876363018576, -60.70358276367188]);
const baseAdd = {
  tile1Add : base.a.addTo(mymap),
  tile2Add : base.b.addTo(mymap)
}
const controlcito = control.layers(baseAdd);

tile1.addTo(mymap);
// tile2.addTo(mymap);
tile3.addTo(mymap);
pop1.addTo(mymap);
controlcito.addTo(mymap);

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
