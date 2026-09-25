import { Link, useParams } from "react-router-dom";
import Photo from "../components/Photo";
import { usePageTitle } from "../components/ScrollToTop";
import { getPost, posts } from "../data/stories";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  usePageTitle(post ? post.title : "Journal");

  if (!post) return <NotFound />;

  const more = posts.filter((item) => item.slug !== post.slug);

  return (
    <article className="bg-white">
      <header className="relative min-h-[48vh] bg-ink">
        <Photo src={post.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
        <div className="relative z-10 mx-auto flex min-h-[48vh] max-w-3xl flex-col justify-end px-5 pb-12 pt-32">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">
            {post.date} · {post.read}
          </p>
          <h1 className="mt-3 font-display text-5xl leading-tight text-white">{post.title}</h1>
        </div>
      </header>
      <div className="mx-auto max-w-3xl space-y-5 px-5 py-12 text-base leading-relaxed text-ink/85">
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <Link to="/blog" className="inline-block pt-4 text-sm font-semibold underline decoration-gold underline-offset-4">
          Back to the journal
        </Link>
      </div>
      <aside className="mx-auto grid max-w-3xl gap-4 px-5 pb-16 sm:grid-cols-2">
        {more.map((item) => (
          <Link key={item.slug} to={`/blog/${item.slug}`} className="rounded-2xl bg-cream p-4 ring-1 ring-line">
            <p className="text-xs uppercase tracking-[0.14em] text-gold">{item.date}</p>
            <p className="mt-2 font-display text-2xl">{item.title}</p>
          </Link>
        ))}
      </aside>
    </article>
  );
}
