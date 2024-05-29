import { figma } from "@figma/code-connect";
import { StandardHeader, VerticalHeader } from "./Headers";

const FIGMA_URL_STANDARD_HEADER =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7717-3642&t=nZCpXAWLyKWF2wPs-11";
const FIGMA_URL_VERTICAL_HEADER =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7722-3364&t=nZCpXAWLyKWF2wPs-11";

figma.connect(StandardHeader, FIGMA_URL_STANDARD_HEADER);

figma.connect(VerticalHeader, FIGMA_URL_VERTICAL_HEADER);
