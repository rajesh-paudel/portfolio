import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Clock3, Search } from "lucide-react";

import { ref, getDatabase, get } from "firebase/database";
import app from "../services/firebaseConfig";
const Blog = () => {
  const db = getDatabase(app);

  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogRef = ref(db, "blogs");
        const snapshot = await get(blogRef);

        if (snapshot.exists()) {
          const data = snapshot.val();

          const formatted = Object.entries(data).map(([id, value]) => ({
            id,
            ...value,
          }));

          setBlogs(formatted);
        } else {
          setBlogs([]);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogs.map((blog) => blog.category)))],
    [blogs],
  );

  const filteredBlogs = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();

    return blogs.filter((blog) => {
      const matchesCategory = category === "All" || blog.category === category;
      const matchesQuery =
        !cleanQuery ||
        blog.title.toLowerCase().includes(cleanQuery) ||
        blog.excerpt.toLowerCase().includes(cleanQuery) ||
        blog.category.toLowerCase().includes(cleanQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, blogs, query]);

  return (
    <main className="min-h-screen bg-[#f7f8f4] text-left text-[#20222b]">
      <section className="mx-auto max-w-7xl px-5 pb-4 pt-14 text-center sm:px-8 lg:px-12 lg:pt-16">
        <h1 className="text-4xl font-bold leading-tight text-[#111315] sm:text-5xl">
          Our Blog
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
          Thoughts, tutorials, and project notes from my web development
          journey.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="mb-8   w-full  mx-auto flex flex-col gap-4   p-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
              size={18}
            />
            <input
              className="w-full rounded-full border-2 border-[#dfe2e8] bg-[#f7f8f4] py-3 pl-10 pr-3 text-sm outline-none transition"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search posts..."
              type="search"
              value={query}
            />
          </label>
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
            {isLoading ? (
              <>
                <span className="h-10 w-20 shrink-0 animate-pulse rounded-md bg-zinc-200" />
                <span className="h-10 w-24 shrink-0 animate-pulse rounded-md bg-zinc-200" />
                <span className="h-10 w-20 shrink-0 animate-pulse rounded-md bg-zinc-200" />
              </>
            ) : (
              categories.map((categoryName) => (
                <button
                  className={`whitespace-nowrap rounded-md border px-3 py-2 text-sm font-semibold transition ${
                    category === categoryName
                      ? "border-[#0d530e] bg-[#0d530e] text-white"
                      : "border-[#dfe2e8] bg-white text-zinc-600 hover:border-[#0d530e] hover:text-[#0d530e]"
                  }`}
                  key={categoryName}
                  onClick={() => setCategory(categoryName)}
                  type="button"
                >
                  {categoryName}
                </button>
              ))
            )}
          </div>
        </div>

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <article
                className="overflow-hidden rounded-lg border border-[#dfe2e8] bg-white"
                key={index}
              >
                <div className="h-52 w-full animate-pulse bg-zinc-200" />
                <div className="space-y-4 p-5">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-24 animate-pulse rounded-full bg-zinc-200" />
                    <div className="h-4 w-20 animate-pulse rounded bg-zinc-200" />
                  </div>
                  <div className="h-6 w-4/5 animate-pulse rounded bg-zinc-200" />
                  <div className="space-y-2">
                    <div className="h-4 w-full animate-pulse rounded bg-zinc-200" />
                    <div className="h-4 w-5/6 animate-pulse rounded bg-zinc-200" />
                  </div>
                  <div className="flex items-center justify-between gap-4 pt-2">
                    <div className="h-4 w-24 animate-puluuse rounded bg-zinc-200" />
                    <div className="h-9 w-24 animate-pulse rounded-md bg-zinc-200" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <article
                className="flex flex-col overflow-hidden rounded-lg border border-[#dfe2e8] bg-white transition hover:-translate-y-1  hover:shadow-[0_18px_40px_rgba(13,83,14,0.08)]"
                key={blog.id}
              >
                <Link to={`/blog/${blog.slug}`}>
                  <img
                    alt={blog.title}
                    className="h-52 w-full object-cover"
                    src={blog.imageUrl}
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                    <span className="rounded-full bg-[#0d530e]/10 px-3 py-1 font-semibold text-[#0d530e]">
                      {blog.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock3 size={15} />
                      {blog.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold leading-snug text-[#111315]">
                    <Link
                      className="transition hover:text-[#0d530e]"
                      to={`/blog/${blog.slug}`}
                    >
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
                    {blog.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-zinc-500">
                      <CalendarDays size={15} />
                      {blog.date}
                    </span>
                    <Link
                      className="rounded-md border border-[#dfe2e8] px-3 py-2 text-sm font-semibold text-[#111315] transition hover:border-[#0d530e] hover:text-[#0d530e]"
                      to={`/blog/${blog.slug}`}
                    >
                      Read blog
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {!isLoading && !filteredBlogs.length && (
          <div className="rounded-lg  p-10 text-center">
            <p className="text-lg font-semibold text-[#111315]">
              No blogs found
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Try another search or choose a different category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Blog;
