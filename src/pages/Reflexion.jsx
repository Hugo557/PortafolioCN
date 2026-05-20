import Layout from "../components/Layout.jsx";

export default function Reflexion() {
  return (
    <Layout>
      <main className="mt-16 px-margin-mobile md:px-margin-desktop py-12 flex justify-center flex-grow flex-1">
        <div className="max-w-[800px] w-full flex flex-col gap-24">
          <article className="space-y-8">
            <header className="space-y-4">
              <div className="text-label-mono font-label-mono text-primary uppercase tracking-widest">Capítulo Final</div>
              <h1 className="text-display-lg font-display-lg text-on-surface leading-tight">
                Reflexión Final
              </h1>
            </header>

            <div className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed space-y-6">
              <p>
                Durante el curso de Cómputo en la Nube aprendí conceptos y herramientas que antes solo conocía de manera superficial. Las actividades me ayudaron a entender mejor cómo funcionan los servicios cloud y cómo se pueden implementar en un entorno real usando plataformas como Azure y AWS.
              </p>

              <p>
                Una de las partes que más me llamó la atención fue trabajar con máquinas virtuales, conexiones SSH, servidores Linux y el despliegue de aplicaciones web. También aprendí sobre Docker, seguridad informática, análisis de tráfico con Wireshark y configuración de servicios como Apache, PHP y bases de datos. Varias prácticas presentaron errores o problemas de configuración, pero eso ayudó a desarrollar más paciencia y capacidad para resolver problemas técnicos.
              </p>

              <p>
                Considero que una de mis fortalezas fue adaptarme rápidamente a nuevas herramientas y buscar soluciones cuando algo no funcionaba correctamente. También mejoré mi comprensión sobre infraestructura, servicios administrados y arquitectura básica en la nube. Como área de mejora, todavía considero importante seguir practicando temas relacionados con automatización, seguridad avanzada y despliegues más complejos.
              </p>

              <p>
                En general, el curso me ayudó a entender mejor cómo se aplican estas tecnologías en proyectos reales y reforzó mi interés en áreas como cloud computing, servidores y ciberseguridad.
              </p>
            </div>
          </article>

          <section className="glass-card p-12 rounded-xl shadow-sm space-y-6 border-l-4 border-l-primary">
            <div className="flex items-center gap-4 text-primary">
              <span className="material-symbols-outlined text-4xl">verified</span>
              <h2 className="text-headline-lg font-headline-lg">Conclusión</h2>
            </div>

            <div className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed space-y-4">
              <p>
                Este portafolio permitió reunir las actividades y prácticas realizadas durante el curso, mostrando el proceso de aprendizaje y los conocimientos adquiridos en temas relacionados con computación en la nube.
              </p>

              <p>
                A través de las evidencias fue posible aplicar conceptos tanto teóricos como prácticos, desde explorar plataformas cloud hasta configurar servidores, desplegar aplicaciones y trabajar con herramientas de seguridad. Además de aprender nuevas tecnologías, también se desarrolló la capacidad de investigar errores, resolver problemas y trabajar de forma más organizada.
              </p>

              <p>
                En conclusión, el curso ayudó a tener una mejor idea de cómo funcionan los entornos cloud y cómo se pueden utilizar en proyectos reales, especialmente en áreas relacionadas con infraestructura, servicios web y administración de sistemas.
              </p>
            </div>
          </section>

          <section className="space-y-6 pb-24">
            <div className="flex items-center justify-between border-b border-outline-variant pb-4">
              <h2 className="text-headline-lg font-headline-lg text-on-surface">Anexos</h2>
              <span className="material-symbols-outlined text-on-surface-variant">attachment</span>
            </div>

            <p className="text-body-lg text-on-surface-variant">
              Los documentos PDF de cada evidencia incluyen capturas de pantalla, reportes, actividades y todo el material generado durante el curso. Están disponibles directamente en cada evidencia dentro de la sección de Unidades.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
