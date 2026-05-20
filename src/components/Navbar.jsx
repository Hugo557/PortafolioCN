import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [dark, setDark] = useState(() =>
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-primary border-b-2 border-primary pb-1 font-body-md"
      : "text-on-surface-variant hover:text-primary transition-colors font-body-md";

  const mobileLinkClass = ({ isActive }) =>
    `block py-4 border-b border-outline-variant text-lg font-medium transition-colors ${
      isActive ? "text-primary" : "text-on-surface-variant hover:text-primary"
    }`;

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-margin-desktop h-16 bg-surface/70 backdrop-blur-md border-b border-outline-variant shadow-sm">
        <div className="font-bold text-primary text-sm md:text-base truncate mr-4">
          Portafolio · Cómputo en la Nube
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink className={linkClass} to="/" end>Inicio</NavLink>
          <NavLink className={linkClass} to="/unidades">Unidades</NavLink>
          <NavLink className={linkClass} to="/reflexion">Reflexión</NavLink>
        </nav>

        <div className="flex items-center gap-1 shrink-0">
          <button onClick={() => setDark(!dark)} className="p-2 hover:bg-surface-container rounded-full transition-all">
            <span className="material-symbols-outlined text-on-surface-variant">
              {dark ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 hover:bg-surface-container rounded-full transition-all">
            <span className="material-symbols-outlined text-on-surface-variant">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed top-16 left-0 w-full z-40 bg-surface border-b border-outline-variant shadow-lg md:hidden">
          <nav className="flex flex-col px-6">
            <NavLink className={mobileLinkClass} to="/" end>Inicio</NavLink>
            <NavLink className={mobileLinkClass} to="/unidades">Unidades</NavLink>
            <NavLink className={mobileLinkClass} to="/reflexion">Reflexión</NavLink>
          </nav>
        </div>
      )}
    </>
  );
}
