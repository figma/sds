import { figma } from "@figma/code-connect";
import { StandardHeader, VerticalHeader } from "./Headers";

const FIGMA_URL_STANDARD_HEADER =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7717-3642&t=nZCpXAWLyKWF2wPs-11";
const FIGMA_URL_VERTICAL_HEADER =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7722-3364&t=nZCpXAWLyKWF2wPs-11";

figma.connect(StandardHeader, FIGMA_URL_STANDARD_HEADER, {
  props: {
    logo: figma.children("Logo"),
    children: figma.children(["Navigation", "Button Group"]),
  },
  example: ({ children, logo }) => (
    <StandardHeader>
      <Layout>
        <LayoutItem size="minor">{logo}</LayoutItem>
        <LayoutItem size="major">
          <Layout gap="xl" alignPrimary="end">
            {children}
          </Layout>
        </LayoutItem>
      </Layout>
    </StandardHeader>
  ),
});

figma.connect(VerticalHeader, FIGMA_URL_VERTICAL_HEADER, {
  props: {
    logo: figma.children("Logo"),
    children: figma.children("Navigation"),
  },
  example: ({ children, logo }) => (
    <VerticalHeader>
      <Layout direction="column" alignSecondary="center" gap="md">
        {logo}
        {children}
      </Layout>
    </VerticalHeader>
  ),
});
