import PageHero from "../components/PageHero";
import { usePageTitle } from "../components/ScrollToTop";
import { images } from "../data/images";
import { services, values } from "../data/site";

const roles = [
  { title: "Trek leadership", text: "Khumbu and Annapurna routes, including rest days and weather buffers for Lukla." },
  { title: "Valley hosts", text: "Kathmandu, Patan, Bhaktapur, and Nagarkot, with cars only when the distance needs one." },
  { title: "Safari desk", text: "Chitwan lodges, park fees, and naturalists for canoe and jeep mornings." },
];

export default function About() {
  usePageTitle("About");

  return (
    <>
      <PageHero
        image={images.ridge}
        eyebrow="About"
        title="A desk in Kathmandu, and people on the trail."
        text="Himalaya Crest is a static demonstration of a Nepal tour office. The routes, seasons, and sample rates are written to feel like a real program."
      />
      <section className="mx-auto max-w-3xl space-y-5 px-5 py-16 text-base leading-relaxed text-muted">
        <p>
          Most first journeys try to see the whole country in a week. We would rather do three things properly: a valley day with context, a lake morning with a view, and either a safari dawn or a trek that respects altitude.
        </p>
        <p>
          The office profile you are reading does not take live bookings. Forms on this site stay in your browser. WhatsApp links are there so the same note can be handed to a real number if you replace the demo contact details.
        </p>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-2">
          {values.map((item) => (
            <article key={item.title} className="rounded-3xl bg-cream p-6 ring-1 ring-line">
              <h2 className="font-display text-3xl">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-4xl">Field roles</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {roles.map((role) => (
            <article key={role.title} className="rounded-3xl bg-ink p-6 text-cream">
              <h3 className="font-display text-3xl text-gold-light">{role.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{role.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="font-display text-4xl">Services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl bg-white p-5 ring-1 ring-line">
              <h3 className="font-medium">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
