import { useState } from "react"
import "./ContactForm.css"

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null)

  const validateForm = () => {
    const newErrors = {}

    // Name validation - required, min 2 characters
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres"
    }

    // Email validation - required and valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Por favor ingresa un email válido"
    }

    // Phone validation - optional but must be numeric if provided
    if (formData.phone.trim()) {
      const phoneRegex = /^[0-9]+$/
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = "El teléfono debe contener solo números"
      }
    }

    // Message validation - required, min 10 characters
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitStatus(null)

    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        })
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      }, 1000)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contáctanos</h2>
          <p className="contact-subtitle">
            ¿Necesitas asesoramiento en ingeniería antisísmica? Escríbenos y nuestro equipo te responderá.
          </p>
        </div>

        <div className="contact-form-wrapper">
          {submitStatus === "success" && (
            <div className="contact-success">
              <span className="success-icon">✓</span>
              <p>Mensaje enviado correctamente. Te contactaremos pronto.</p>
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`form-input ${errors.name ? "error" : ""}`}
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${errors.email ? "error" : ""}`}
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`form-input ${errors.phone ? "error" : ""}`}
                value={formData.phone}
                onChange={handleChange}
                placeholder="1234567890"
              />
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                className={`form-input form-textarea ${errors.message ? "error" : ""}`}
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu proyecto o consulta..."
                rows="5"
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button type="submit" className="form-submit">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm