import React from "react";
import "../styles/home.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      
      <header className="hero">
        <h1>Bienvenue chez notre cabinet dentaire</h1>
        <p>Prenez soin de votre sourire avec nos experts dentaires.</p>
        <a href="/signup" className="btn">Prendre un rendez-vous</a>
      </header>
      <section className="services">
        <h2>Nos Services</h2>
        <div className="service-list">
          <div className="service">
            <h3>Consultation</h3>
            <p>Obtenez un diagnostic détaillé de votre santé bucco-dentaire.</p>
          </div>
          <div className="service">
            <h3>Blanchiment</h3>
            <p>Retrouvez un sourire éclatant grâce à notre service de blanchiment.</p>
          </div>
          <div className="service">
            <h3>Soins et Prothèses</h3>
            <p>Des solutions adaptées pour restaurer votre dentition.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
