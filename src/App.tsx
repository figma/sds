import { Footer, Header } from "compositions";
import { AllProviders } from "data";
import { ReactNode, useEffect, useState } from "react";
import { Demo } from "./examples/Demo";
import { FAQs } from "./examples/FAQs";
import { NikeLaunch } from "./examples/NikeLaunch";
import { NikePDP } from "./examples/NikePDP";
import { PanelSections } from "./examples/PanelSections";
import { PricingGrid } from "./examples/PricingGrid";
import { ProductDetails } from "./examples/ProductDetails";
import { ProductGrid } from "./examples/ProductGrid";
import { WelcomeHero } from "./examples/WelcomeHero";

function useHash() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return hash;
}

function DefaultPage() {
  return (
    <>
      <Header />
      <Demo />
      <WelcomeHero />
      <PanelSections />
      <PricingGrid />
      <FAQs />
      <ProductDetails />
      <ProductGrid />
      <Footer />
    </>
  );
}

// Hash routes named after the Figma pages; the page name is also the tab title.
const pages = new Map<string, () => ReactNode>([
  ["nike_welcome", () => <DefaultPage />],
  ["nike_launch", () => <NikeLaunch />],
  ["nike_product_details_page", () => <NikePDP />],
]);

// Old hashes that keep working after the rename.
const aliases = new Map([
  ["nike", "nike_launch"],
  ["nike-pdp", "nike_product_details_page"],
]);

const defaultTitle = document.title;

function App() {
  const hash = useHash().slice(1);
  const pageName = aliases.get(hash) ?? hash;
  const renderPage = pages.get(pageName);

  useEffect(() => {
    document.title = renderPage ? pageName : defaultTitle;
  }, [pageName, renderPage]);

  return (
    <AllProviders>{renderPage ? renderPage() : <DefaultPage />}</AllProviders>
  );
}

export default App;
