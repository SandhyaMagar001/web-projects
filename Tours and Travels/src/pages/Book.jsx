import { useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import PageHero from "../components/PageHero";
import { usePageTitle } from "../components/ScrollToTop";
import { images } from "../data/images";
import { getPackage } from "../data/packages";

export default function Book() {
  const { slug = "" } = useParams();
  const tour = getPackage(slug);
  usePageTitle(tour ? `Book ${tour.title}` : "Book");

  return (
    <>
      <PageHero
        image={tour?.image || images.hero}
        eyebrow="Booking"
        title={tour ? `Book ${tour.title}` : "Start a booking request"}
        text="Choose dates and a group size. Review the note here, then send it on WhatsApp. Nothing is stored on a server."
      />
      <section className="mx-auto max-w-3xl px-5 py-14">
        <BookingForm key={slug || "open"} initialSlug={slug} />
      </section>
    </>
  );
}
