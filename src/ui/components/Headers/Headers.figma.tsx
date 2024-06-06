import { figma } from "@figma/code-connect";
import { Header, HeaderAuth } from "./Headers";

figma.connect(Header, "<FIGMA_URL_HEADER>");
figma.connect(HeaderAuth, "<FIGMA_URL_HEADER_AUTH>");
