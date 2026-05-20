import Navbar from "./Navbar.jsx";

export default function Layout({ children }) {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <footer className="border-t border-outline-variant bg-surface-container-low py-6 px-6 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-outline">
          <span>© 2026 Hugo Emilio Espinoza Tun · Portafolio de Evidencias</span>
          <span>Cómputo en la Nube · TecNM Campus Saltillo</span>
        </div>
      </footer>
    </div>
  );
}
