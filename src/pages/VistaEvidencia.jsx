import { Link, useParams } from "react-router-dom";
import { evidencias } from "../data/evidencias.js";

export default function VistaEvidencia() {
  const { id } = useParams();
  const evidencia = evidencias.find((e) => e.id === id);

  if (!evidencia) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="bg-white border border-outline-variant rounded-xl p-8">
          <h1 className="font-headline-lg text-headline-lg">Evidencia no encontrada</h1>
          <Link to="/unidades" className="text-primary font-bold">Volver a unidades</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background text-on-background font-body-md h-screen flex flex-col overflow-hidden">
      <header className="h-14 border-b border-outline-variant flex items-center justify-between px-6 bg-white shrink-0">
        <div className="flex items-center gap-4 min-w-0">
          <Link to={`/unidades?unit=${evidencia.unidad}`} className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors shrink-0">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span className="text-sm font-medium">Volver</span>
          </Link>
          <div className="h-4 w-px bg-outline-variant shrink-0"></div>
          <h1 className="text-sm font-semibold text-on-surface truncate">{evidencia.titulo}</h1>
        </div>

        <a href={evidencia.pdf} target="_blank" rel="noreferrer" className="lg:hidden shrink-0 ml-4 flex items-center gap-1 text-sm text-primary font-bold">
          <span className="material-symbols-outlined text-[18px]">open_in_new</span>
          PDF
        </a>

        <div className="hidden lg:flex items-center gap-4">
          <span className="text-caption text-outline">Unidad {evidencia.unidad}</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* PDF — solo desktop */}
        <section className="hidden lg:flex lg:w-[60%] bg-surface-dim flex-col border-r border-outline-variant">
          <div className="flex-1 overflow-hidden">
            <iframe src={evidencia.pdf} title={evidencia.titulo} className="w-full h-full border-0" />
          </div>
        </section>

        {/* Detalles — siempre visible, ancho completo en móvil */}
        <section className="lg:w-[40%] flex-1 bg-white flex flex-col overflow-hidden">
          <div className="p-6 md:p-8 border-b border-outline-variant">
            <h2 className="text-xl font-bold text-on-surface">Detalle de la Actividad</h2>
            <p className="text-sm text-on-surface-variant mt-1">Análisis y reflexión del proceso de aprendizaje.</p>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 space-y-8">
            <section>
              <h4 className="text-xs font-bold text-outline uppercase tracking-widest mb-3">¿Qué es la evidencia?</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">{evidencia.descripcion}</p>
            </section>

            <section>
              <h4 className="text-xs font-bold text-outline uppercase tracking-widest mb-3">¿Cuándo se realizó?</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">{evidencia.fecha}</p>
            </section>

            <section>
              <h4 className="text-xs font-bold text-outline uppercase tracking-widest mb-3">Resultados</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">{evidencia.resultados}</p>
            </section>

            <section className="bg-surface-container p-6 rounded border border-outline-variant">
              <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Aprendizaje y Reflexión</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">{evidencia.reflexion}</p>
            </section>

            <section>
              <h4 className="text-xs font-bold text-outline uppercase tracking-widest mb-3">Anexos</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">{evidencia.anexos}</p>
            </section>

            {/* Botón PDF en móvil al final */}
            <a href={evidencia.pdf} target="_blank" rel="noreferrer"
              className="lg:hidden flex items-center justify-center gap-2 w-full py-3 bg-primary text-on-primary rounded-lg font-bold">
              <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
              Ver PDF completo
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
