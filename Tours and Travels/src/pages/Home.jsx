import { Link } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";
import EnquiryForm from "../components/EnquiryForm";
import PackageCard from "../components/PackageCard";
import Photo from "../components/Photo";
import Reveal from "../components/Reveal";
import SearchPanel from "../components/SearchPanel";
import SectionHeading from "../components/SectionHeading";
import { usePageTitle } from "../components/ScrollToTop";
import { destinations } from "../data/destinations";
import { images } from "../data/images";
import { packages } from "../data/packages";
import { company, services, stats } from "../data/site";
import { gallery, posts, testimonials } from "../data/stories";
import Button from "../components/Button";

export default function Home() {
  usePageTitle("");
  const featured = packages.filter((item) => item.featured);

  return (
    <>
      <section className="relative min-h-[100svh] bg-ink">
        <Photo src={images.hero} alt="Prayer flags and a stupa below Himalayan peaks" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-10 pt-32">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
            Kathmandu · Since {company.established}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] text-white sm:text-7xl">
            Travel Nepal with a quieter kind of expertise.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Private routes through Kathmandu, Pokhara, Chitwan, Everest, and Annapurna. Small groups, clear sample rates, and days that are allowed to breathe.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/packages">View packages</Button>
            <Button to="/contact" variant="ghost">
              Plan with us
            </Button>
          </div>
          <div className="mt-10">
            <SearchPanel />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="font-display text-4xl text-ink">{item.value}</p>
              <p className="mt-1 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Destinations"
            title="Five regions, planned as places rather than stops."
            text="Each card opens a short briefing and the journeys that begin there."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination, index) => (
            <Reveal key={destination.slug} delay={index * 70}>
              <DestinationCard destination={destination} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Packages"
              title="Signature departures"
              text="Sample rates are per person, twin share. Open a journey for the day-by-day plan."
            />
            <Link to="/packages" className="text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4">
              All packages
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((trip) => (
              <PackageCard key={trip.slug} trip={trip} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-2">
        <Reveal>
          <Photo src={images.swayambhu} alt="Swayambhunath stupa in Kathmandu" className="h-[460px] w-full rounded-3xl object-cover" />
        </Reveal>
        <Reveal delay={80}>
          <SectionHeading
            eyebrow="About"
            title="A Kathmandu desk that still walks the trails it sells."
            text="Himalaya Crest is a demonstration studio for a Nepal tour office: heritage mornings, lake days, jungle dawns, and teahouse treks written with real distances."
          />
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
            <li>Guides are assigned before you fly, not collected at the airport.</li>
            <li>Acclimatization days stay in the itinerary for Everest and Annapurna.</li>
            <li>Sample prices list inclusions so a quote is easy to compare.</li>
          </ul>
          <Button to="/about" variant="dark" className="mt-8">
            Read our approach
          </Button>
        </Reveal>
      </section>

      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            light
            eyebrow="Services"
            title="What the desk actually handles"
            text="The practical work around a beautiful route: permits, seats, cars, and someone who answers."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-display text-3xl text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Gallery" title="A few frames from the route" />
          <Link to="/gallery" className="text-sm font-semibold underline decoration-gold underline-offset-4">
            Open the gallery
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.slice(0, 4).map((item) => (
            <Link key={item.caption} to="/gallery" className="group relative overflow-hidden rounded-2xl">
              <Photo src={item.src} alt={item.alt} className="h-44 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-56" />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Traveler notes"
            title="How a well-paced day is described"
            text="Illustrative notes for this demo. They are not imported reviews."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="rounded-3xl bg-cream p-6 ring-1 ring-line">
                <p className="font-display text-2xl leading-snug text-ink">“{item.quote}”</p>
                <footer className="mt-4 text-sm text-muted">
                  {item.name} · {item.place}
                  <span className="mt-1 block text-gold">{item.trip}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Journal" title="Notes before you pack" />
          <Link to="/blog" className="text-sm font-semibold underline decoration-gold underline-offset-4">
            All notes
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5">
              <Photo src={post.image} alt="" className="h-48 w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-gold">{post.date}</p>
                <h3 className="mt-2 font-display text-3xl leading-tight group-hover:text-navy">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-sand/70 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Tell us the month and the pace."
              text={`Desk hours ${company.hours}. You can also call ${company.phoneDisplay} or move the same note to WhatsApp.`}
            />
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/10 sm:p-8">
            <EnquiryForm interestOptions={packages.map((item) => item.title)} />
          </div>
        </div>
      </section>
    </>
  );
}
