import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Edit3,
  ExternalLink,
  Lock,
  LogOut,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import {
  createPostSlug,
  emptyBlogForm,
  fallbackImage,
  getStoredPosts,
  saveStoredPosts,
} from "../data/blogPosts";

const ADMIN_PASSWORD = "admin123";

const BlogAdmin = () => {
  const [posts, setPosts] = useState(getStoredPosts);
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [form, setForm] = useState(emptyBlogForm);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    saveStoredPosts(posts);
  }, [posts]);

  const updateForm = (field, value) => {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
  };

  const resetForm = () => {
    setForm(emptyBlogForm);
    setEditingId(null);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setPassword("");
      setLoginError("");
      return;
    }

    setLoginError("Use admin123 for this frontend demo.");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextPost = {
      ...form,
      id: editingId || createPostSlug(form.title),
    };

    setPosts((currentPosts) => {
      if (editingId) {
        return currentPosts.map((post) =>
          post.id === editingId ? nextPost : post,
        );
      }

      return [nextPost, ...currentPosts];
    });
    resetForm();
  };

  const editPost = (post) => {
    setForm({
      title: post.title,
      category: post.category,
      date: post.date,
      readTime: post.readTime,
      author: post.author,
      imageUrl: post.imageUrl || "",
      excerpt: post.excerpt,
      content: post.content,
      featured: post.featured,
    });
    setEditingId(post.id);
  };

  const deletePost = (postId) => {
    setPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== postId),
    );

    if (editingId === postId) {
      resetForm();
    }
  };

  if (!isAdmin) {
    return (
      <main className="min-h-screen bg-[#f7f8f4] px-5 py-16 text-[#20222b] sm:px-8">
        <form
          className="mx-auto max-w-md rounded-lg border border-[#dfe2e8] bg-white p-6 text-left shadow-[0_18px_40px_rgba(13,83,14,0.08)]"
          onSubmit={handleLogin}
        >
          <span className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-[#0d530e]/10 text-[#0d530e]">
            <Lock size={22} />
          </span>
          <h1 className="text-3xl font-bold text-[#111315]">Blog admin</h1>
          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Manage posts from a separate admin area. Demo password: admin123
          </p>
          <input
            className="mt-6 w-full rounded-md border border-[#dfe2e8] bg-[#f7f8f4] px-3 py-3 text-sm outline-none transition focus:border-[#0d530e] focus:bg-white"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter admin password"
            type="password"
            value={password}
          />
          {loginError && (
            <p className="mt-3 text-sm font-medium text-red-600">
              {loginError}
            </p>
          )}
          <button
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0d530e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0a430b]"
            type="submit"
          >
            <Lock size={16} />
            Unlock dashboard
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f8f4] px-5 py-10 text-left text-[#20222b] sm:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#0d530e]">
              Dashboard
            </p>
            <h1 className="text-3xl font-bold text-[#111315]">Blog admin</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#dfe2e8] bg-white px-4 py-3 text-sm font-semibold text-[#111315] transition hover:border-[#0d530e] hover:text-[#0d530e]"
              to="/blog"
            >
              <ExternalLink size={16} />
              View blog
            </Link>
            <button
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#dfe2e8] bg-white px-4 py-3 text-sm font-semibold text-zinc-600 transition hover:border-[#0d530e] hover:text-[#0d530e]"
              onClick={() => setIsAdmin(false)}
              type="button"
            >
              <LogOut size={16} />
              Log out
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px]">
          <form
            className="rounded-lg border border-[#dfe2e8] bg-white p-5"
            onSubmit={handleSubmit}
          >
            <h2 className="mb-5 text-xl font-bold text-[#111315]">
              {editingId ? "Edit post" : "Create post"}
            </h2>
            <div className="grid gap-3">
              <input
                className="w-full rounded-md border border-[#dfe2e8] px-3 py-3 text-sm outline-none focus:border-[#0d530e]"
                onChange={(event) => updateForm("title", event.target.value)}
                placeholder="Post title"
                required
                value={form.title}
              />
              <input
                className="w-full rounded-md border border-[#dfe2e8] px-3 py-3 text-sm outline-none focus:border-[#0d530e]"
                onChange={(event) => updateForm("imageUrl", event.target.value)}
                placeholder="Image URL"
                type="url"
                value={form.imageUrl}
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className="w-full rounded-md border border-[#dfe2e8] px-3 py-3 text-sm outline-none focus:border-[#0d530e]"
                  onChange={(event) =>
                    updateForm("category", event.target.value)
                  }
                  placeholder="Category"
                  required
                  value={form.category}
                />
                <input
                  className="w-full rounded-md border border-[#dfe2e8] px-3 py-3 text-sm outline-none focus:border-[#0d530e]"
                  onChange={(event) =>
                    updateForm("readTime", event.target.value)
                  }
                  placeholder="Read time"
                  required
                  value={form.readTime}
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className="w-full rounded-md border border-[#dfe2e8] px-3 py-3 text-sm outline-none focus:border-[#0d530e]"
                  onChange={(event) => updateForm("date", event.target.value)}
                  type="date"
                  value={form.date}
                />
                <input
                  className="w-full rounded-md border border-[#dfe2e8] px-3 py-3 text-sm outline-none focus:border-[#0d530e]"
                  onChange={(event) => updateForm("author", event.target.value)}
                  placeholder="Author"
                  required
                  value={form.author}
                />
              </div>
              <textarea
                className="min-h-24 w-full resize-y rounded-md border border-[#dfe2e8] px-3 py-3 text-sm outline-none focus:border-[#0d530e]"
                onChange={(event) => updateForm("excerpt", event.target.value)}
                placeholder="Short excerpt"
                required
                value={form.excerpt}
              />
              <textarea
                className="min-h-52 w-full resize-y rounded-md border border-[#dfe2e8] px-3 py-3 text-sm outline-none focus:border-[#0d530e]"
                onChange={(event) => updateForm("content", event.target.value)}
                placeholder="Full post content"
                required
                value={form.content}
              />
              <label className="flex items-center gap-3 rounded-md border border-[#dfe2e8] px-3 py-3 text-sm font-medium text-zinc-600">
                <input
                  checked={form.featured}
                  className="h-4 w-4 accent-[#0d530e]"
                  onChange={(event) =>
                    updateForm("featured", event.target.checked)
                  }
                  type="checkbox"
                />
                Mark as featured
              </label>
              <div className="flex gap-3">
                <button
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-[#0d530e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0a430b]"
                  type="submit"
                >
                  {editingId ? <Edit3 size={16} /> : <Plus size={16} />}
                  {editingId ? "Update post" : "Create post"}
                </button>
                {editingId && (
                  <button
                    className="grid h-12 w-12 place-items-center rounded-md border border-[#dfe2e8] text-zinc-600 transition hover:border-[#0d530e] hover:text-[#0d530e]"
                    onClick={resetForm}
                    title="Cancel edit"
                    type="button"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            </div>
          </form>

          <aside className="space-y-4">
            {posts.map((post) => (
              <div
                className="overflow-hidden rounded-lg border border-[#dfe2e8] bg-white"
                key={post.id}
              >
                <img
                  alt={post.title}
                  className="h-36 w-full object-cover"
                  src={post.imageUrl || fallbackImage}
                />
                <div className="p-4">
                  <p className="font-semibold leading-snug text-[#111315]">
                    {post.title}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">
                    {post.category} / {post.date}
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <Link
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-[#dfe2e8] px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:border-[#0d530e] hover:text-[#0d530e]"
                      to={`/blog/${post.id}`}
                    >
                      <ExternalLink size={15} />
                      View
                    </Link>
                    <button
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-[#dfe2e8] px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:border-[#0d530e] hover:text-[#0d530e]"
                      onClick={() => editPost(post)}
                      type="button"
                    >
                      <Edit3 size={15} />
                      Edit
                    </button>
                    <button
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-red-200 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                      onClick={() => deletePost(post.id)}
                      type="button"
                    >
                      <Trash2 size={15} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </main>
  );
};

export default BlogAdmin;
