import React, { useState, useEffect } from "react";
import { X, Image, FileText, Folder, Type, Sparkles } from "lucide-react";

export default function CreateBlogModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("React");
  const [imageUrl, setImageUrl] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTitle(initialData ? initialData.title || "" : "");
      setCategory(initialData ? initialData.category || "React" : "React");

      setImageUrl(initialData ? initialData.imageUrl || "" : "");
      setExcerpt(initialData ? initialData.excerpt || "" : "");
      setContent(initialData ? initialData.content || "" : "");
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  // Helper to generate slug/id automatically from the title
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  // Helper to calculate reading time (~200 words per minute)
  const calculateReadTime = (text) => {
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: generateSlug(title) || `post-${Date.now()}`,
      title,
      category,
      date: new Date().toISOString().split("T")[0],
      readTime: calculateReadTime(content),
      author: "Admin",
      imageUrl:
        imageUrl ||
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80", // fallback default
      excerpt,
      content,
    };

    onSubmit(newPost);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      {/* Click backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl overflow-hidden bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[var(--accent)]" />
              Create New Blog
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Publish a new piece to your tech portfolio
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 cursor-pointer hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto p-6 space-y-5"
        >
          {/* Title Input */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Type className="w-4 h-4 text-slate-400" /> Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g., Building a portfolio that feels alive"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2 text-slate-900 placeholder-slate-400 border border-slate-200 rounded-lg outline-none transition-all text-sm"
            />
          </div>

          {/* Grid for Category & Image URL */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Category */}
            <div className="sm:col-span-1">
              <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Folder className="w-4 h-4 text-slate-400" /> Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 text-slate-900 border border-slate-200 rounded-lg bg-white outline-none transition-all text-sm"
              >
                <option value="React">React</option>
                <option value="Tailwind">Tailwind</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Next.js">Next.js</option>
                <option value="Design">Design</option>
              </select>
            </div>

            {/* Image URL */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Image className="w-4 h-4 text-slate-400" /> Image URL
              </label>
              <input
                type="url"
                placeholder="https://images.unsplash.com/..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-3.5 py-2 text-slate-900 placeholder-slate-400 border outline-none border-slate-200 rounded-lg  transition-all text-sm"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-slate-400" /> Excerpt
            </label>
            <textarea
              rows={2}
              required
              placeholder="A brief summary for the card preview..."
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full px-3.5 py-2 text-slate-900 placeholder-slate-400 border outline-none border-slate-200 rounded-lg  transition-all text-sm resize-none"
            />
          </div>

          {/* Content TextArea */}
          <div className="flex-1 flex flex-col">
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-slate-400" /> Main Content
            </label>
            <textarea
              rows={6}
              required
              placeholder="Write your beautiful post story here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3.5 py-2 text-slate-900 placeholder-slate-400 border outline-none border-slate-200 rounded-lg  transition-all text-sm resize-y min-h-[120px]"
            />
          </div>

          {/* Footer Control Panel */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 cursor-pointer hover:bg-slate-50 border border-slate-200 rounded-lg transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-medium text-white bg-[var(--accent)] hover:opacity-90 cursor-pointer rounded-lg shadow-sm shadow-indigo-100 transition-all"
            >
              Publish Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
