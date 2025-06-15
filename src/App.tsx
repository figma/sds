import { Footer, Header } from "compositions";
import { AuthenticationProvider } from "providers";
import { FAQs } from "./examples/FAQs";
import { PanelSections } from "./examples/PanelSections";
import { PricingGrid } from "./examples/PricingGrid";
import { ProductDetails } from "./examples/ProductDetails";
import { ProductGrid } from "./examples/ProductGrid";
import { WelcomeHero } from "./examples/WelcomeHero";

function App() {
  return (
    <AuthenticationProvider>
      <Header />
      <WelcomeHero />
      <PanelSections />
      <FAQs />
      <ProductDetails />
      <PricingGrid />
      <ProductGrid />
      <Footer />
    </AuthenticationProvider>
  );
}

export default App;
