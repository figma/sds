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
import { RunClub } from "./examples/RunClub";
import { RunClubN } from "./examples/RunClubN";
import { RunClub4 } from "./examples/run_club_4";
import { RunClub5 } from "./examples/run_club_5";
import { RunClub6 } from "./examples/run_club_6";
import { NikeRunClub7 } from "./examples/nike_run_club_7";
import { NikeRunClub8 } from "./examples/nike_run_club_8";
import { NikeRunClub9 } from "./examples/nike_run_club_9";
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
  ["run_club", () => <RunClub />],
  ["run_club_N", () => <RunClubN />],
  ["run_club_4", () => <RunClub4 />],
  ["run_club_5", () => <RunClub5 />],
  ["run_club_6", () => <RunClub6 />],
  ["nike_run_club_7", () => <NikeRunClub7 />],
  ["nike_run_club_8", () => <NikeRunClub8 />],
  ["nike_run_club_9", () => <NikeRunClub9 />],
]);

// Old hashes that keep working after the rename.
const aliases = new Map([
  ["nike", "nike_launch"],
  ["nike-pdp", "nike_product_details_page"],
  ["run-club", "run_club"],
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
