import { figma } from "@figma/code-connect";
import { Logo } from "./Logo";

const FIGMA_URL_LOGO =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2159-5053&t=nZCpXAWLyKWF2wPs-11";

figma.connect(Logo, FIGMA_URL_LOGO);
