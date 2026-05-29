export const BLOG_STORAGE_KEY = "portfolio_blog_posts";

export const fallbackImage =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80";

export const starterPosts = [
  {
    id: "building-a-react-portfolio",
    title: "Building a portfolio that feels alive",
    category: "React",
    date: "2026-05-20",
    readTime: "5 min read",
    author: "Admin",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    excerpt:
      "A practical look at turning a simple personal website into a polished product story with cleaner sections, stronger writing, and thoughtful interactions.",
    content:
      "A portfolio works best when it feels intentional. The homepage should quickly show what you build, the project cards should explain impact instead of only listing tools, and the contact flow should make it easy for people to start a conversation. React helps keep those sections modular so each part can grow without making the whole site harder to maintain.",
   
  },
  {
    id: "tailwind-in-existing-css",
    title: "Adding Tailwind without losing your existing CSS",
    category: "Tailwind",
    date: "2026-05-24",
    readTime: "4 min read",
    author: "Admin",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    excerpt:
      "You do not need to rewrite everything. Tailwind can power new interfaces while your older vanilla CSS continues handling stable sections.",
    content:
      "The cleanest way to introduce Tailwind into an existing app is to start with one new surface. Build the new component with utility classes, keep shared global variables for brand colors, and avoid touching working CSS until there is a clear reason. This keeps the migration calm and lets you learn Tailwind inside real UI instead of a blank demo.",
   
  },
  {
    id: "simple-admin-crud",
    title: "Designing a simple blog admin flow",
    category: "CRUD",
    date: "2026-05-27",
    readTime: "6 min read",
    author: "Admin",
    imageUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
    excerpt:
      "A small admin panel can cover the essentials: login, create, edit, delete, preview, and persistence in localStorage for a frontend-only version.",
    content:
      "A frontend-only CRUD screen is a useful prototype before connecting a real backend. The important parts are predictable form state, clear edit and delete actions, useful empty states, and local persistence so content survives refreshes. Later, the same UI can call an API after you add authentication and a database.",
    
  },
];

export const emptyBlogForm = {
  title: "",
  category: "",
  date: new Date().toISOString().slice(0, 10),
  readTime: "3 min read",
  author: "Admin",
  imageUrl: "",
  excerpt: "",
  content: "",
  
};

export const createPostSlug = (title) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || crypto.randomUUID();

export const getStoredPosts = () => {
  const savedPosts = window.localStorage.getItem(BLOG_STORAGE_KEY);
  return savedPosts ? JSON.parse(savedPosts) : starterPosts;
};

export const saveStoredPosts = (posts) => {
  window.localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts));
};
