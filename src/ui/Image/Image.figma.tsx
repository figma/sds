import figma from "@figma/code-connect";
import { Image } from "./Image";

figma.connect(Image, "<FIGMA_URL_IMAGE>", {
  props: {
    aspectRatio: figma.enum("Aspect ratio", {
      "16:9": "16-9",
      "1:1": "1-1",
      "4:3": "4-3",
      fill: "fill",
      natural: "natural",
    }),
    size: figma.enum("Size", {
      sm: "sm",
      md: "md",
      lg: "lg",
      fill: "fill",
      natural: "natural",
    }),
    src: figma.enum("Aspect ratio", {
      "16:9": "https://picsum.photos/800/450",
      "1:1": "https://picsum.photos/600/600",
      "4:3": "https://picsum.photos/800/600",
      fill: "https://picsum.photos/800/600",
      natural: "https://picsum.photos/800/600",
    }),
  },
  example: ({ aspectRatio, size, src }) => (
    <Image
      aspectRatio={aspectRatio}
      size={size}
      alt="Always use alt"
      src={src}
    />
  ),
});
