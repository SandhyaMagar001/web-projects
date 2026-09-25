import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Photo from "../components/Photo";
import { usePageTitle } from "../components/ScrollToTop";
import { images } from "../data/images";
import { posts } from "../data/stories";

export default function Blog() {
  usePageTitle("Journal");

  return (
    <>
      <PageHero
        image={images.highRange}
        eyebrow="Journal"
        title="Practical notes, not a brochure rewrite."
        text="Seasons, a slower Kathmandu day, and what a Chitwan morning is actually for."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5">
            <Photo src={post.image} alt="" className="h-52 w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-gold">
                {post.date} · {post.read}
              </p>
              <h2 className="mt-2 font-display text-3xl leading-tight">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
