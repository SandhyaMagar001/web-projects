import EnquiryForm from "../components/EnquiryForm";
import PageHero from "../components/PageHero";
import { usePageTitle } from "../components/ScrollToTop";
import { images } from "../data/images";
import { packages } from "../data/packages";
import { company, whatsappLink } from "../data/site";

export default function Contact() {
  usePageTitle("Contact");

  return (
    <>
      <PageHero
        image={images.boudha}
        eyebrow="Contact"
        title="The desk is on Durbar Marg."
        text="Call, write, or send the same note on WhatsApp. The form below stays on your device."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-5">
          <div className="rounded-3xl bg-white p-6 ring-1 ring-line">
            <h2 className="font-display text-3xl">Visit or call</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li>{company.address}</li>
              <li>{company.hours}</li>
              <li>
                <a className="font-semibold text-ink hover:text-gold" href={`tel:${company.phoneTel}`}>
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a className="font-semibold text-ink hover:text-gold" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
            </ul>
            <a
              href={whatsappLink("Hello Himalaya Crest, I would like to plan a Nepal journey.")}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#128C7E] px-5 text-sm font-semibold text-white"
            >
              Message on WhatsApp
            </a>
          </div>
          <iframe
            title="Map of Durbar Marg, Kathmandu"
            className="h-72 w-full rounded-3xl border-0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=85.308%2C27.704%2C85.328%2C27.718&layer=mapnik&marker=27.7115%2C85.3178"
          />
        </div>
        <div className="rounded-3xl bg-white p-6 ring-1 ring-line sm:p-8">
          <h2 className="font-display text-4xl">Enquiry</h2>
          <div className="mt-6">
            <EnquiryForm interestOptions={packages.map((item) => item.title)} />
          </div>
        </div>
      </section>
    </>
  );
}
