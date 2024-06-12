import figma from "@figma/code-connect";
import { Description, Label } from "../Fieldset/Fieldset";
import { Avatar, AvatarBlock, AvatarGroup } from "./Avatar";

figma.connect(AvatarGroup, "<FIGMA_URL_AVATAR_GROUP>", {
  props: {
    spacing: figma.enum("Spacing", {
      Overlap: "sm",
      Spaced: "xs",
    }),
    overlap: figma.enum("Spacing", {
      Overlap: true,
      Spaced: false,
    }),
    children: figma.children("Avatar"),
  },
  example: ({ children, spacing, overlap }) => (
    <AvatarGroup spacing={spacing} overlap={overlap} max={3}>
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
      Initials: figma.string("Initials"),
    }),
    size: figma.enum("Size", {
      Large: "lg",
      Small: "sm",
    }),
    src: figma.enum("Type", {
      Image: "https://placehold.co/80",
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
    <AvatarBlock>
      {avatar}
      <Label>{title}</Label>
      <Description>{description}</Description>
    </AvatarBlock>
  ),
});
