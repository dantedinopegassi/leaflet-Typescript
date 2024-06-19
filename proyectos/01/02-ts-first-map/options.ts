import {
  LatLngExpression,
  Map,
  Popup,
  TileLayer,
  TileLayerOptions,
  WMSOptions,
} from "leaflet";

// const energia = "https://sig.energia.gob.ar/wmsenergia?"
// const staFe =
//   "https://www.santafe.gob.ar/idesf/geowebcache/service/wms?SERVICE=WMS&REQUEST=GetTile&VERSION=1.0.0&LAYER=argentina&STYLE=default&TILEMATRIXSET=EPSG%3A4326_argentina&TILEMATRIX=EPSG%3A4326_argentina%3A3&TILEROW=13&TILECOL=23&FORMAT=image%2Fpng";

const tileOptionsMaxZoomAttribution: TileLayerOptions = {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
  zIndex: 0,
};

const wmsOptionsLayers: WMSOptions = {
  attribution: "Map data © Mundialis",
  layers: "electrica_transporte_visor_eett",
  format: "image/png",
  transparent: true,
  zIndex: 10,
};

const tileBase1 = () => {
  return new TileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    tileOptionsMaxZoomAttribution
  );
};

const tileBase2 = () => {
  /***************************************************************|
  |* El concepto detrás de la siguiente línea de código se llama *|
  |* "Type Assertion" y la idea es agregarle dinámicamente       *|
  |* reglas a TypeScript para verificar que todo está bien y no  *|
  |* salten errores.                                             *|
  |***************************************************************/

  const opciones: TileLayerOptions & { ext: string } = {
    minZoom: 0,
    maxZoom: 18,
    attribution:
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: "png",
  };
  return new TileLayer(
    "https://tiles.stadiamaps.com/tiles/stamen_terrain_background/{z}/{x}/{y}{r}.{ext}",
    opciones
  );
};

export const baselayers = () => {
  return {
    a: tileBase1(),
    b: tileBase2(),
  };
};

export const customTile = (host: string) => {
  return new TileLayer.WMS(host, wmsOptionsLayers);
};

export const pop = (map: Map, latlng: LatLngExpression) => {
  return new Popup(latlng, {
    content: "<p>Hello world!<br />This is a nice popup.</p>",
  }).openOn(map);
};

// ([base: Layer]) => {
//   return new Control.Layers([]);}
