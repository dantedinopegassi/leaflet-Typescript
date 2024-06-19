import { Control, DomUtil } from "leaflet";

const Watermark = Control.extend({
  onAdd: () => {
    const img = DomUtil.create("img");

    img.src = "../../../assets/images/dog-2.webp";
    img.style.width = "100px";

    return img;
  },
});

export const watermark = () => new Watermark();
