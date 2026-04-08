import "./Footer.css"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Consultoría Antisísmica</h3>
            <p className="footer-description">
              Expertos en protección sísmica para estructuras seguras y confiables.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contacto</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-icon">📧</span>
                <a href="mailto:jumataba@antisismica.onmicrosoft.com">
                  jumataba@antisismica.onmicrosoft.com
                </a>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <a href="tel:+573196032255">+57 (319) 603-2255</a>
              </li>
             
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li>
                <a href="#services">Servicios</a>
              </li>
              <li>
                <a href="#contact">Contacto</a>
              </li>
              <li>
                <a href="#hero">Inicio</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Síguenos</h4>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <span>facebook</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>linkedin</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span>twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Consultoría Antisísmica. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer