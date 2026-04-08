import "./App.css"

import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import ContactForm from "./components/ContactForm/ContactForm"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App