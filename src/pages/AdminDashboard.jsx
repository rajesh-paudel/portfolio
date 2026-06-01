import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  Plus,
  Edit2,
  Trash2,
  LayoutDashboard,
  Search,
  BookOpen,
  Layers,
  User,
  Calendar,
} from "lucide-react";
import toast from "react-hot-toast";
import CreateBlogModal from "../components/CreateBlogModal";
import app from "../services/firebaseConfig";
import {
  getDatabase,
  ref,
  set,
  push,
  update,
  remove,
  onValue,
} from "firebase/database";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const db = getDatabase(app);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/admin/login");
    }
  }, [navigate]);

  useEffect(() => {
    const blogsRef = ref(db, "blogs");

    const unsubscribe = onValue(blogsRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const liveBlogs = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        liveBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogs(liveBlogs);
      } else {
        setBlogs([]);
      }
    });

    return () => unsubscribe();
  }, [db]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin/login");
  };

  const handleCreateOrUpdate = async (postData) => {
    try {
      if (editingPost) {
        const postRef = ref(db, `blogs/${editingPost.id}`);
        await update(postRef, postData);
        toast.success("Blog updated successfully!");
      } else {
        console.log(postData);
        const blogsRef = ref(db, "blogs");
        const newPostRef = push(blogsRef);
        await set(newPostRef, postData);
        toast.success("Blog created successfully!");
      }
      setEditingPost(null);
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Error saving blog!");
      console.error("Error saving to Realtime Database: ", error);
    }
  };

  const handleEditClick = (blog) => {
    setEditingPost(blog);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const postRef = ref(db, `blogs/${id}`);
      await remove(postRef);
      toast.success("Blog deleted successfully!");
    } catch (error) {
      console.error("Error removing database reference item: ", error);
      toast.error("Error deleting blog!");
    }
  };

  const filteredBlogs = blogs.filter((blog) => {
    const matchesTitle = blog.title
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = blog.category
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesTitle || matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row antialiased">
      <main className="flex-1 p-4 sm:p-6 md:p-10 max-w-6xl mx-auto w-full space-y-5 sm:space-y-6 overflow-y-auto">
        {/* Top Meta Area */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-start text-slate-800 tracking-tight">
              Blog Management
            </h2>
            <p className="text-xs text-slate-500 mt-0.5 text-start">
              Add, edit, view or drop blogs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                setEditingPost(null);
                setIsModalOpen(true);
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[var(--accent)] cursor-pointer hover:opacity-90 text-white px-4 py-2.5 sm:py-2 rounded-xl text-sm font-medium transition-all shadow-sm shadow-indigo-100"
            >
              <Plus size={16} />
              Create Blog
            </button>
            <button
              onClick={handleLogout}
              className="w-full sm:w-auto flex items-center justify-center sm:justify-between px-4 sm:px-2 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-red-400 border border-gray-700 hover:bg-red-500/5 group transition-all cursor-pointer"
            >
              <span className="flex items-center gap-3">
                <LogOut
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform cursor-pointer"
                />
                Sign Out
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center bg-white border border-slate-200/80 rounded-xl px-3.5 py-2 shadow-sm w-full sm:max-w-md  transition-all">
          <Search size={18} className="text-slate-400 mr-2.5 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by post title or category tag..."
            className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
          />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/70 shadow-sm overflow-hidden">
          {filteredBlogs.length > 0 ? (
            <>
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full min-w-[760px] text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/70 border-b border-slate-100 text-slate-500 text-[11px] font-bold tracking-wider uppercase">
                      <th className="py-4 px-6 w-16 text-center">Preview</th>
                      <th className="py-4 px-6">Post Meta Info</th>
                      <th className="py-4 px-6 w-32">Category</th>
                      <th className="py-4 px-6 w-32">Date</th>
                      <th className="py-4 px-6 w-24 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                    {filteredBlogs.map((blog) => (
                      <tr
                        key={blog.id}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="py-4 px-6 text-center">
                          <img
                            src={blog.imageUrl || blog.image}
                            alt=""
                            className="w-11 h-11 object-cover rounded-xl border border-slate-100 bg-slate-100 shadow-sm inline-block"
                          />
                        </td>

                        <td className="py-4 px-6 max-w-sm">
                          <div
                            className="font-semibold text-slate-800 truncate"
                            title={blog.title}
                          >
                            {blog.title}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                            <User size={12} /> {blog.author || "Admin"}
                            <span className="mx-1">&bull;</span>
                            <span>{blog.readTime || "3 min read"}</span>
                          </div>
                        </td>

                        <td className="py-4 px-6 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-lg">
                            <Layers size={11} className="text-slate-400" />
                            {blog.category || "React"}
                          </span>
                        </td>

                        <td className="py-4 px-6 text-xs text-slate-500 whitespace-nowrap">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={13} className="text-slate-400" />
                            {blog.date}
                          </div>
                        </td>

                        <td className="py-4 px-6 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              onClick={() => handleEditClick(blog)}
                              className="p-2 text-slate-500 hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] rounded-lg transition-colors cursor-pointer"
                              title="Edit Post"
                            >
                              <Edit2 size={15} />
                            </button>
                            <button
                              onClick={() => handleDelete(blog.id)}
                              className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                              title="Delete Post"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="divide-y divide-slate-100 md:hidden">
                {filteredBlogs.map((blog) => (
                  <div key={blog.id} className="p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <img
                        src={blog.imageUrl || blog.image}
                        alt=""
                        className="w-14 h-14 object-cover rounded-xl border border-slate-100 bg-slate-100 shadow-sm shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <div
                          className="font-semibold text-slate-800 text-sm leading-5 line-clamp-2"
                          title={blog.title}
                        >
                          {blog.title}
                        </div>
                        <div className="text-xs text-slate-400 mt-1 flex flex-wrap items-center gap-x-1 gap-y-0.5">
                          <User size={12} />
                          <span>{blog.author || "Admin"}</span>
                          <span className="mx-1">&bull;</span>
                          <span>{blog.readTime || "3 min read"}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-lg">
                        <Layers size={11} className="text-slate-400" />
                        {blog.category || "React"}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-slate-500 bg-slate-50 rounded-lg">
                        <Calendar size={13} className="text-slate-400" />
                        {blog.date}
                      </span>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-1">
                      <button
                        onClick={() => handleEditClick(blog)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] rounded-lg transition-colors cursor-pointer"
                        title="Edit Post"
                      >
                        <Edit2 size={14} />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                        title="Delete Post"
                      >
                        <Trash2 size={14} />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="py-16 text-center space-y-3">
              <div className="inline-flex h-12 w-12 rounded-full bg-slate-100 items-center justify-center text-slate-400">
                <Search size={20} />
              </div>
              <div>
                <p className="text-slate-700 font-medium text-sm">
                  No documents located
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Try widening your key search parameters.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {isModalOpen && (
        <CreateBlogModal
          isOpen={isModalOpen}
          initialData={editingPost}
          onClose={() => {
            setIsModalOpen(false);
            setEditingPost(null);
          }}
          onSubmit={handleCreateOrUpdate}
        />
      )}
    </div>
  );
}
