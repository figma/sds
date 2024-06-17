import figma from "@figma/code-connect";
import { placeholder } from "images";
import { Avatar, AvatarBlock, AvatarGroup } from "./Avatar";

figma.connect(AvatarGroup, "<FIGMA_URL_AVATAR_GROUP>", {
  props: {
    spacing: figma.enum("Spacing", {
      Overlap: "negative-200",
      Spaced: "100",
    }),
    children: figma.children("Avatar"),
  },
  example: ({ children, spacing }) => (
    <AvatarGroup spacing={spacing} max={3}>
      {children}
    </AvatarGroup>
  ),
});
figma.connect(Avatar, "<FIGMA_URL_AVATAR>", {
  props: {
    square: figma.enum("Shape", {
      Square: true,
    }),
    initials: figma.enum("Type", {
      Initial: figma.string("Initials"),
    }),
    size: figma.enum("Size", {
      Large: "large",
      Small: "small",
    }),
    src: figma.enum("Type", {
      Image: placeholder,
    }),
  },
  example: ({ initials, size, square, src }) => (
    <Avatar square={square} size={size} src={src} initials={initials} />
  ),
});

figma.connect(AvatarBlock, "<FIGMA_URL_AVATAR_BLOCK>", {
  props: {
    title: figma.string("Title"),
    description: figma.string("Description"),
    avatar: figma.children("Avatar"),
  },
  example: ({ title, description, avatar }) => (
    <AvatarBlock title={title} description={description}>
      {avatar}
    </AvatarBlock>
  ),
});
