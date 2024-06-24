import { Control, ControlPosition, DomUtil, Util } from "leaflet";
import logotipo from "../../../assets/images/dog-2.webp";

const Watermark = Control.extend({
  options: {
    position: "bottomleft",
    img: logotipo,
    border: true,
  },

  initialize: function (options: {
    position: ControlPosition;
    img: string;
    border: boolean;
  }) {
    Util.setOptions(this, options);
  },

  onAdd: function () {
    const img = DomUtil.create("img");

    img.src = this.options.img;
    img.style.width = "100px";

    return img;
  },
  onRemove: function () {},
});

export const watermark = (options?: {
  position?: ControlPosition;
  img?: string;
  border?: boolean;
}) => new Watermark(options);
