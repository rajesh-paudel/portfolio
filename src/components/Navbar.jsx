import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", to: "/about", type: "route" },
  { label: "Tech Stack", to: "/#tech-stack" },
  { label: "Education", to: "/#education" },
  { label: "Projects", to: "/#projects" },
  { label: "Blog", to: "/blog", type: "route" },
  { label: "Contact", to: "/#contact" },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const isActiveLink = (item) => {
    if (item.type !== "route") {
      return false;
    }

    if (item.to === "/blog") {
      return location.pathname.startsWith("/blog");
    }

    return location.pathname === item.to;
  };
  const getLinkClassName = (item) =>
    isActiveLink(item) ? "nav-link nav-link-active" : "nav-link";

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/" onClick={closeSidebar}>
            Rajesh Paudel
          </Link>
        </div>
        <div className="nav-desktop">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link className={getLinkClassName(item)} to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-actions">
          <Link className="hire-button" to="/#contact">
            Hire Me
          </Link>
        </div>
        <button
          type="button"
          className="menu-toggle"
          aria-label={
            isSidebarOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isSidebarOpen}
          onClick={toggleSidebar}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`sidebar-backdrop ${isSidebarOpen ? "is-visible" : ""}`}
        onClick={closeSidebar}
      />

      <aside className={`sidebar ${isSidebarOpen ? "is-open" : ""}`}>
        <div className="sidebar-header">
          <div className="logo">
            <Link to="/" onClick={closeSidebar}>
              Rajesh Paudel
            </Link>
          </div>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Close navigation menu"
            onClick={closeSidebar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <ul className="nav-links sidebar-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                className={getLinkClassName(item)}
                to={item.to}
                onClick={closeSidebar}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          className="hire-button sidebar-hire-button"
          to="/#contact"
          onClick={closeSidebar}
        >
          Hire Me
        </Link>
      </aside>
    </>
  );
};

export default Navbar;
