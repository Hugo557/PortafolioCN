import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import { unidades, evidencias } from "../data/evidencias.js";

export default function Unidades() {
  const [searchParams] = useSearchParams();
  const [openUnit, setOpenUnit] = useState(() => {
    const unit = searchParams.get("unit");
    return unit ? parseInt(unit) : null;
  });

  return (
    <Layout>
      <main className="pt-24 pb-16 px-margin-mobile md:px-gutter flex-grow flex-1">
        <div className="max-w-container-max mx-auto">
          <header className="mb-12">
            <h1 className="font-headline-lg text-headline-lg text-on-surface">Unidades y Actividades</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              Registro detallado de las actividades académicas y laboratorios prácticos desarrollados durante el curso.
            </p>
          </header>

          <div className="flex flex-col gap-6">
            {unidades.map((unidad) => {
              const actividades = evidencias.filter((e) => e.unidad === unidad.id);
              const isOpen = openUnit === unidad.id;

              return (
                <div key={unidad.id} className="unit-group bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button className="w-full flex items-center justify-between p-6 text-left group" onClick={() => setOpenUnit(isOpen ? null : unidad.id)}>
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-3xl">{unidad.icono}</span>
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h2 className="font-headline-md text-headline-md text-on-surface">
                            Unidad {unidad.id}: {unidad.titulo}
                          </h2>
                          <span className="text-xs bg-primary/10 text-primary rounded-full px-2 py-0.5 font-mono shrink-0">
                            {actividades.length} {actividades.length === 1 ? "actividad" : "actividades"}
                          </span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant">{unidad.descripcion}</p>
                      </div>
                    </div>

                    <span className={`material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                      expand_more
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-outline-variant bg-surface">
                      <div className="p-6 flex flex-col gap-3">
                        {actividades.map((actividad) => (
                          <div key={actividad.id} className="activity-item flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 bg-surface-container rounded-lg border border-transparent hover:border-primary-fixed-dim transition-all unit-transition">
                            <div>
                              <span className="font-body-md text-on-surface">{actividad.id} {actividad.titulo}</span>
                              <p className="text-caption text-on-surface-variant mt-1">{actividad.tipo}</p>
                            </div>

                            <Link to={`/evidencia/${actividad.id}`} className="text-primary font-label-mono text-label-mono hover:underline">
                              Ver evidencia
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
}
