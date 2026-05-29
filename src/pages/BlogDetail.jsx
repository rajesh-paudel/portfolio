import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock3, UserRound } from "lucide-react";
import { fallbackImage, getStoredPosts } from "../data/blogPosts";
import { useState, useEffect } from "react";
import { ref, onValue, getDatabase } from "firebase/database";
import app from "../services/firebaseConfig";
const BlogDetail = () => {
  const db = getDatabase(app);
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    const blogRef = ref(db, `blogs/${slug}`);

    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();

      setBlog(data);
    });
  }, [slug]);

  if (!blog) {
    return (
      <main className="min-h-screen bg-[#f7f8f4] px-5 py-16 text-center text-[#20222b]">
        <div className="mx-auto max-w-xl rounded-lg border border-[#dfe2e8] bg-white p-8">
          <h1 className="mt-2 text-3xl font-bold text-[#111315]">
            Post not found
          </h1>
          <p className="mt-3 text-zinc-600">
            This blog post may have been deleted or moved.
          </p>
          <Link
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#0d530e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0a430b]"
            to="/blog"
          >
            <ArrowLeft color="white" size={16} />
            <span className="text-white"> Back to blog</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f8f4] text-left text-[#20222b]">
      <article>
        <header className="mx-auto max-w-4xl px-5 pb-8 pt-12 text-center sm:px-8 lg:pt-16">
          <Link
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0d530e] transition hover:text-[#0a430b]"
            to="/blog"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>
          <div className="mb-5 flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-500">
            <span className="rounded-full bg-[#0d530e]/10 px-3 py-1 font-semibold text-[#0d530e]">
              {blog.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <UserRound size={15} />
              {blog.author}
            </span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays size={15} />
              {blog.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock3 size={15} />
              {blog.readTime}
            </span>
          </div>
          <h1 className="text-4xl font-bold leading-tight text-[#111315] sm:text-5xl">
            {blog.title}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            {blog.excerpt}
          </p>
        </header>

        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <img
            alt={blog.title}
            className="h-[320px] w-full rounded-lg object-cover sm:h-[460px]"
            src={blog.imageUrl || fallbackImage}
          />
        </div>

        <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
          <p className="whitespace-pre-line text-base leading-8 text-[#20222b] sm:text-lg">
            {blog.content}
          </p>
        </div>
      </article>
    </main>
  );
};

export default BlogDetail;
