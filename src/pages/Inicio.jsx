import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import { unidades } from "../data/evidencias.js";

export default function Inicio() {
  return (
    <Layout>
      <main className="pt-16 min-h-screen flex flex-col">
        <section className="relative py-20 px-6 md:px-margin-desktop overflow-hidden border-b border-outline-variant bg-surface-container-lowest">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-fixed-dim/20 to-transparent pointer-events-none"></div>

          <div className="max-w-container-max mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
              <div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full font-label-mono text-caption mb-6">
                  PORTAFOLIO ACADÉMICO 2026
                </div>
                <h1 className="font-display-lg text-display-lg text-on-surface mb-4 tracking-tight">
                  Portafolio de Evidencias
                </h1>
                <h2 className="font-headline-md text-headline-md text-secondary">
                  Cómputo en la Nube
                </h2>
              </div>
              <img src="/its-logo.png" alt="Logo ITS Saltillo" className="h-16 md:h-24 object-contain shrink-0 md:mt-8 self-start md:self-auto" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-gutter mt-12">
              <div className="p-5 bg-white border border-outline-variant rounded-xl">
                <p className="text-caption font-caption text-outline mb-1">ALUMNO</p>
                <p className="font-semibold text-[15px] text-on-surface leading-snug">Hugo Emilio Espinoza Tun</p>
                <p className="text-caption text-outline mt-1">No. Control: 22050627</p>
              </div>

              <div className="p-5 bg-white border border-outline-variant rounded-xl">
                <p className="text-caption font-caption text-outline mb-1">CARRERA</p>
                <p className="font-semibold text-[15px] text-on-surface leading-snug">Ing. en Sistemas Computacionales</p>
              </div>

              <div className="p-5 bg-white border border-outline-variant rounded-xl">
                <p className="text-caption font-caption text-outline mb-1">PROFESOR</p>
                <p className="font-semibold text-[15px] text-on-surface leading-snug">Ing. Miguel Salazar del Bosque</p>
              </div>

              <div className="p-5 bg-white border border-outline-variant rounded-xl">
                <p className="text-caption font-caption text-outline mb-1">INSTITUCIÓN</p>
                <p className="font-semibold text-[15px] text-on-surface leading-snug">TecNM - Instituto Tecnológico de Saltillo</p>
              </div>

              <div className="p-5 bg-white border border-outline-variant rounded-xl">
                <p className="text-caption font-caption text-outline mb-1">FECHA</p>
                <p className="font-semibold text-[15px] text-on-surface leading-snug">05/2026</p>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <Link to="/unidades" className="px-6 py-3 bg-primary text-on-primary rounded-lg font-bold shadow-md hover:bg-primary-container transition-all">
                Ver unidades
              </Link>
              <Link to="/reflexion" className="px-6 py-3 border border-primary text-primary rounded-lg font-bold hover:bg-primary/5 transition-all">
                Reflexión final
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-margin-desktop">
          <div className="max-w-[800px] mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-1 bg-primary rounded-full"></span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">Introducción</h3>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">
              Este portafolio recopila las evidencias, prácticas, actividades y aprendizajes desarrollados durante el curso de Cómputo en la Nube.
            </p>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Su propósito es documentar el avance académico y técnico mediante evidencias organizadas por unidad.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 md:px-margin-desktop bg-surface-container-low">
          <div className="max-w-container-max mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="w-12 h-1 bg-secondary rounded-full"></span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">Objetivos</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 p-8 bg-white border border-outline-variant rounded-xl relative overflow-hidden flex flex-col justify-between">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">flag</span>
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-4">Objetivo General</h4>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    Integrar las actividades realizadas durante el curso para demostrar conocimientos sobre plataformas cloud, seguridad, virtualización, despliegue de servicios e infraestructura en la nube.
                  </p>
                </div>
              </div>

              <div className="p-8 tech-card bg-white rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">cloud</span>
                </div>
                <h4 className="font-headline-md text-[20px] text-on-surface mb-3">Cloud</h4>
                <p className="text-on-surface-variant">Comprender plataformas como AWS, Google Cloud y Azure.</p>
              </div>

              <div className="p-8 tech-card bg-white rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">security</span>
                </div>
                <h4 className="font-headline-md text-[20px] text-on-surface mb-3">Seguridad</h4>
                <p className="text-on-surface-variant">Identificar riesgos, ataques y buenas prácticas de seguridad.</p>
              </div>

              <div className="p-8 tech-card bg-white rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">terminal</span>
                </div>
                <h4 className="font-headline-md text-[20px] text-on-surface mb-3">Implementación</h4>
                <p className="text-on-surface-variant">Desplegar servicios, máquinas virtuales, Docker y aplicaciones web.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">Estructura del Portafolio</h3>
              <p className="text-on-surface-variant">Navega por las unidades y evidencias del curso.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter">
              {unidades.map((u) => (
                <Link key={u.id} to={`/unidades?unit=${u.id}`} className="group cursor-pointer">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-outline-variant bg-gradient-to-br from-primary/5 to-primary/15 flex items-end justify-between p-4">
                    <span className="absolute top-1 right-3 text-[56px] font-black text-primary/10 leading-none select-none">
                      {String(u.id).padStart(2, "0")}
                    </span>
                    <span className="material-symbols-outlined text-primary text-4xl relative z-10 group-hover:scale-110 transition-transform">
                      {u.icono}
                    </span>
                  </div>
                  <p className="text-label-mono font-label-mono text-primary mb-1">UNIDAD {String(u.id).padStart(2,"0")}</p>
                  <h5 className="text-[15px] font-semibold text-on-surface group-hover:text-primary transition-colors leading-snug">{u.titulo}</h5>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
