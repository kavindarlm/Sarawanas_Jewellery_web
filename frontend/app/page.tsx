import Hero from "@/components/Hero";
import LatestCollections from "@/components/LatestCollections";
import Products from "@/components/Products";
import VisitStore from "@/components/VisitStore";

export default function Home() {
  return (
    <main>
      <Hero />
      <LatestCollections />
      <Products />
      <VisitStore />
    </main>
  );
}
