import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col p-4 gap-2 h-[calc(100vh-64px)] w-64 fixed left-0 top-16 bg-surface-container-low border-r border-outline-variant">
      <div className="flex flex-col gap-1 px-2 py-4 mb-4 border-b border-outline-variant">
        <div className="text-headline-sm font-headline-sm font-black text-primary uppercase">Cómputo en la Nube</div>
        <div className="text-body-md font-body-md text-on-surface-variant">Portafolio de Evidencias</div>
      </div>

      <nav className="flex flex-col gap-1">
        <Link to="/" className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg cursor-pointer unit-transition">
          <span className="material-symbols-outlined">school</span>
          <span className="text-label-mono font-label-mono uppercase tracking-wider">Inicio</span>
        </Link>

        <Link to="/unidades" className="flex items-center gap-3 p-3 bg-secondary-container text-on-secondary-container rounded-lg font-bold cursor-pointer">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="text-label-mono font-label-mono uppercase tracking-wider">Unidades</span>
        </Link>

        <Link to="/reflexion" className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg cursor-pointer">
          <span className="material-symbols-outlined">assignment</span>
          <span className="text-label-mono font-label-mono uppercase tracking-wider">Reflexión</span>
        </Link>
      </nav>
    </aside>
  );
}
