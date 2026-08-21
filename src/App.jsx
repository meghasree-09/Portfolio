import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ViewProject from "./components/ViewProject";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";


function Home() {
  return (
    <>
      <Navbar />

      <main>

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Main Portfolio */}
        <Route path="/" element={<Home />} />

        {/* Individual Project */}
        <Route
          path="/project/:id"
          element={<ViewProject />}
        />

        <Route
  path="/admin/dashboard"
  element={<AdminDashboard />}
/>

<Route
  path="/admin/dashboard"
  element={<AdminDashboard />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;