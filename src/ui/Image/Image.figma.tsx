import figma from "@figma/code-connect";
import { Image } from "./Image";

const FIGMA_URL_IMAGE =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=159-8617&m=dev";

figma.connect(Image, FIGMA_URL_IMAGE, {
  props: {
    aspectRatio: figma.enum("Aspect ratio", {
      "16:9": "16-9",
      "1:1": "1-1",
      "4:3": "4-3",
    }),
    src: figma.enum("Aspect ratio", {
      "16:9": "https://picsum.photo/800/450",
      "1:1": "https://picsum.photo/600/600",
      "4:3": "https://picsum.photo/800/600",
    }),
  },
  example: ({ aspectRatio, src }) => (
    <Image aspectRatio={aspectRatio} alt="Always use alt" src={src} />
  ),
});
