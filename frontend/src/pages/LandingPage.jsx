import React from "react";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import About from "../components/landing/About";
import Footer from "../components/landing/Footer";

const LandingPage = () => {
  return (
    <div className="bg-white text-ink font-body overflow-x-hidden ">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .mesh-bg {
          background: radial-gradient(ellipse 80% 60% at 60% 0%, rgba(62, 207, 142, 0.13) 0%, transparent 70%),
                      radial-gradient(ellipse 60% 50% at 10% 80%, rgba(62, 207, 142, 0.07) 0%, transparent 70%),
                      #f8fafb;
        }
        .card-glow:hover {
          box-shadow: 0 0 0 2px #3ecf8e44, 0 20px 60px rgba(62, 207, 142, 0.12);
        }
      `,
        }}
      />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
