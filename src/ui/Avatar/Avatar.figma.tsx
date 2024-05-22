import figma from "@figma/code-connect";
import { Avatar, AvatarGroup } from "./Avatar";

const FIGMA_URL_AVATAR =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:1103";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=24-9238"
const FIGMA_URL_AVATAR_GROUP =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=56-15608";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=24-9238"

figma.connect(AvatarGroup, FIGMA_URL_AVATAR_GROUP, {
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
figma.connect(Avatar, FIGMA_URL_AVATAR, {
  props: {
    square: figma.enum("Shape", {
      Square: true,
    }),
    initials: figma.enum("Type", {
      Initials: figma.string("Initials"),
    }),
    size: figma.enum("Size", {
      lg: "lg",
      sm: "sm",
    }),
    src: figma.enum("Type", {
      Image:
        "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    }),
  },
  example: ({ initials, size, square, src }) => (
    <Avatar square={square} size={size} src={src} initials={initials} />
  ),
});
