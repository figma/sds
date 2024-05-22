import figma from "@figma/code-connect";
import { Image } from "./Image";

const FIGMA_URL_IMAGE =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=159-8617&t=F729DYhi7M0j9cGQ-11";

figma.connect(Image, FIGMA_URL_IMAGE, {
  props: {
    aspectRatio: figma.enum("Aspect ratio", {
      "16:9": "16-9",
      "1:1": "1-1",
      "4:3": "4-3",
    }),
  },
  example: ({ aspectRatio }) => (
    <Image
      aspectRatio={aspectRatio}
      alt="Always use alt"
      src="https://picsum.photo/600/500"
    />
  ),
});
