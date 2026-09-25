import DestinationCard from "../components/DestinationCard";
import PageHero from "../components/PageHero";
import { usePageTitle } from "../components/ScrollToTop";
import { destinations } from "../data/destinations";
import { images } from "../data/images";

export default function Destinations() {
  usePageTitle("Destinations");

  return (
    <>
      <PageHero
        image={images.boudhaDusk}
        eyebrow="Destinations"
        title="Where the journeys begin"
        text="Kathmandu, Pokhara, Chitwan, Everest, and Annapurna. Open a region to see the routes we build from it."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2 xl:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard key={destination.slug} destination={destination} />
        ))}
      </section>
    </>
  );
}
