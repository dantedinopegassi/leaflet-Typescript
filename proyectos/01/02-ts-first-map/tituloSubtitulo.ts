import { Control, ControlPosition, DomUtil, Util } from "leaflet";

const Titulo = Control.extend({
  /***************************************************************|
  |* INICIALIZACION                                              *|
  |* OPCIONES                                                    *|
  |* INFORMACION PARA CONTROL PERSONALIZADO                      *|
  |***************************************************************/

  options: {
    position: "bottomleft",
    title: "Hola Master",
    subtitle: "El coso funca",
  },

  initialize: function(options: {
    position: ControlPosition;
    title: string;
    subtitle: string;
  }) {
    Util.setOptions(this, options);
  },

  onAdd: function(){
    const controlDiv = DomUtil.create("span", "titulin");
    controlDiv.innerHTML =
      "<h5>" + this.options.title + "\n" + this.options.subtitle + "</h5>";
    controlDiv.style.backgroundColor = "white";
    controlDiv.style.textAlign = "center";
    return controlDiv;
  },

  onRemove: function() {},
});

export const titulo = (options?: {
  position?: ControlPosition;
  title?: string;
  subtitle?: string;
}) => new Titulo(options);
