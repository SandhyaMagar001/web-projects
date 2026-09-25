import { useState, type FormEvent, type ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, Search } from 'lucide-react';
import { EmptyState, PageIntro } from '../components/Section';
import { BRAND, CARE_EMAIL, PROMO_CODE, FREE_SHIPPING, SHIPPING_FEE, articles, faqs, jobs, money } from '../data';
import { useMixora } from '../store';

function Prose({ children }: { children: ReactNode }) {
  return <div className="max-w-2xl space-y-4 text-[15px] leading-8 text-muted">{children}</div>;
}

export function JournalPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <PageIntro eyebrow="Notes" title="Journal" text="How we choose and care for the Velune edit." />
      <div className="grid gap-5 md:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.slug} to={`/journal/${article.slug}`} className="overflow-hidden bg-white transition hover:-translate-y-1">
            <img src={article.image} alt="" className="h-48 w-full object-cover" />
            <div className="p-5">
              <small className="text-[11px] uppercase tracking-wider text-accent-dark">{article.date}</small>
              <h2 className="mt-2 text-xl font-semibold text-brand">{article.title}</h2>
              <p className="mt-2 text-sm text-muted">{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  if (!article) return <main className="mx-auto max-w-7xl px-4 py-16"><EmptyState icon={<Search size={28} />} title="Story not found" text="It may have been archived." to="/journal" action="Back to journal" /></main>;
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link to="/journal" className="mb-6 inline-flex items-center gap-1 text-sm text-muted"><ChevronLeft size={16} /> Journal</Link>
      <PageIntro eyebrow={article.date} title={article.title} text={article.excerpt} />
      <img src={article.image} alt="" className="mb-8 h-80 w-full object-cover" />
      <Prose>{article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</Prose>
    </main>
  );
}

export function ContactPage() {
  const { setToast } = useMixora();
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    setToast('Message sent. We will reply shortly.');
  }
  return (
    <main className="mx-auto max-w-xl px-4 py-16">
      <PageIntro eyebrow="Write to us" title="Contact" text={`Questions about an order or the edit? Write to ${CARE_EMAIL}.`} />
      {sent ? <p>Thank you. We have your note and will be in touch.</p> : (
        <form className="space-y-4" onSubmit={submit}>
          <label className="block text-xs text-muted">Name<input required className="mt-2 w-full border border-line px-3 py-3 text-sm" /></label>
          <label className="block text-xs text-muted">Email<input type="email" required className="mt-2 w-full border border-line px-3 py-3 text-sm" /></label>
          <label className="block text-xs text-muted">Message<textarea required rows={5} className="mt-2 w-full border border-line px-3 py-3 text-sm" /></label>
          <button type="submit" className="bg-brand px-5 py-3 text-xs font-semibold text-white">Send</button>
        </form>
      )}
    </main>
  );
}

export function ShippingPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <PageIntro eyebrow="Customer care" title="Shipping" />
      <Prose>
        <p>Orders over {money(FREE_SHIPPING)} ship free. Under that, {money(SHIPPING_FEE)} covers packing and carrier.</p>
        <p>Domestic parcels usually leave within two business days. Made-to-order furniture is 4–8 weeks.</p>
      </Prose>
    </main>
  );
}

export function ReturnsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <PageIntro eyebrow="Customer care" title="Returns" />
      <Prose>
        <p>30 days from delivery for unused items. Opened beauty cannot return unless faulty.</p>
        <p>Write to {CARE_EMAIL} to start a return in this demo.</p>
      </Prose>
    </main>
  );
}

export function FaqPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <PageIntro eyebrow="Answers" title="FAQ" text="Common questions, written plainly." />
      <div className="space-y-8">
        {faqs.map((item) => (
          <article key={item.q}>
            <h2 className="text-xl font-semibold text-brand">{item.q}</h2>
            <p className="mt-2 text-muted">{item.a}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export function HelpPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <PageIntro eyebrow="Customer care" title="Help center" />
      <Prose>
        <p>Start with <Link to="/faq" className="underline">FAQ</Link>, <Link to="/shipping" className="underline">shipping</Link>, or <Link to="/returns" className="underline">returns</Link>.</p>
        <p>Still stuck? <Link to="/contact" className="underline">Contact us</Link> or email {CARE_EMAIL}.</p>
      </Prose>
    </main>
  );
}

export function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <PageIntro eyebrow="The house" title={`About ${BRAND}`} />
      <Prose>
        <p>Velune is a considered shop for the way you work, dress, and settle in. Corporate polish without the cold catalog feel.</p>
        <p>We edit for staying power. If it is only photogenic, it does not ship.</p>
      </Prose>
    </main>
  );
}

export function StoryPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <PageIntro eyebrow="Since the first edit" title="Our story" />
      <Prose>
        <p>Velune started as a small room with too many samples and one rule: keep only what you would still want in two years.</p>
        <p>The mix grew. The rule did not.</p>
      </Prose>
    </main>
  );
}

export function CareersPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <PageIntro eyebrow="Work with us" title="Careers" text="A small team. High taste. Kind replies." />
      <div className="space-y-8">
        {jobs.map((job) => (
          <article key={job.title}>
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="mt-2 text-muted">{job.location}. {job.blurb}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <PageIntro eyebrow="Legal" title="Privacy" />
      <Prose>
        <p>This static demo keeps cart, account, and orders in your browser only. Nothing is sent to a server.</p>
      </Prose>
    </main>
  );
}

export function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <PageIntro eyebrow="Legal" title="Terms" />
      <Prose>
        <p>Prices are in Nepali rupees (NPR). Demo checkout validates a card locally and does not charge it.</p>
        <p>Promo {PROMO_CODE} takes 10% off merchandise in this preview.</p>
      </Prose>
    </main>
  );
}
