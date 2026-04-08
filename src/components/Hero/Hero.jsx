import "./Hero.css"

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Expertos en Ingeniería
            <span className="hero-title-highlight"> Antisísmica</span>
          </h1>
          <p className="hero-subtitle">
            Protegemos estructuras y vidas mediante análisis técnicos especializados,
            diseño sismorresistente y consultoría de vanguardia.
          </p>
          <button className="hero-cta" onClick={scrollToContact}>
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero