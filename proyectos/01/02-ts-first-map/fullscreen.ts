import { Control, ControlPosition, DomUtil, Util } from "leaflet";

const Fullscreen = Control.extend({
  options: {
    position: "topright",
  },

  initialize: function (options: { position: ControlPosition }) {
    Util.setOptions(this, options);
  },

  onAdd: function () {
    const container = DomUtil.create("input", "fullscreen");
    container.type = "button";
    container.style.width = "30px";

    container.onclick = () => {
      // alert("hiciste click wachin");
      toggleFullscreen();
    };

    const toggleFullscreen = () => {
      const map = document.getElementById('map');
      if (map != null) {
        if (!document.fullscreenElement) {
          map.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
    };

    return container;
  },

  onRemove: function () { },
});

export const fullscreen = (options?: { position?: ControlPosition }) =>
  new Fullscreen(options);
