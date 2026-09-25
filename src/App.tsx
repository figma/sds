import { Footer, Header } from "compositions";
import { AllProviders } from "data";
import { useEffect, useState } from "react";
import { Demo } from "./examples/Demo";
import { FAQs } from "./examples/FAQs";
import { NikeLaunch } from "./examples/NikeLaunch";
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

function App() {
  const hash = useHash();

  if (hash === "#nike") {
    return (
      <AllProviders>
        <NikeLaunch />
      </AllProviders>
    );
  }

  return (
    <AllProviders>
      <Header />
      <Demo />
      <WelcomeHero />
      <PanelSections />
      <PricingGrid />
      <FAQs />
      <ProductDetails />
      <ProductGrid />
      <Footer />
    </AllProviders>
  );
}

export default App;
