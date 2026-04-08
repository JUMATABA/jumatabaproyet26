import "./Services.css"

const servicesData = [
  {
    id: 1,
    icon: "🔍",
    title: "Evaluación de Vulnerabilidad",
    description: "Análisis completo del riesgo sísmico de estructuras existentes mediante metodologías especializadas."
  },
  {
    id: 2,
    icon: "📐",
    title: "Diseño Antisísmico",
    description: "Creación de sistemas estructurales diseñados para resistir movimientos telúricos."
  },
  {
    id: 3,
    icon: "🏗️",
    title: "Retrofit/Reforzamiento",
    description: "Mejora de estructuras existentes para cumplir con normativas antisísmicas actuales."
  },
  {
    id: 4,
    icon: "📋",
    title: "Inspecciones y Certificaciones",
    description: "Evaluación técnica y emisión de certificados de cumplimiento normativo."
  },
  {
    id: 5,
    icon: "💡",
    title: "Asesoramiento Técnico",
    description: "Consultoría especializada para proyectos de construcción y desarrollo urbano."
  },
  {
    id: 6,
    icon: "📊",
    title: "Estudios de Riesgo",
    description: "Análisis de riesgo sísmico regional y zonificación para planificación territorial."
  }
]

function Services() {
  return (
    <section id="services" className="services">
      <div className="container services-container">
        <div className="services-header">
          <h2 className="services-title">Nuestros Servicios</h2>
          <p className="services-subtitle">
            Soluciones integrales en ingeniería antisísmica para proteger lo que más importa
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services