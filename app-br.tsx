import React from "react";
import { createRoot } from "react-dom/client";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { CaseStudies } from "./components/CaseStudies";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ptBR } from "./content";

const WHATSAPP_NUMBER = "5521998595821";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(ptBR.whatsappMessage)}`;

export default function App() {
  return (
    <>
      <Navbar whatsappUrl={WHATSAPP_URL} content={ptBR} />
      <Hero whatsappUrl={WHATSAPP_URL} content={ptBR} />
      <Services content={ptBR} />
      <CaseStudies content={ptBR} />
      <About whatsappUrl={WHATSAPP_URL} content={ptBR} />
      <Testimonials content={ptBR} />
      <ContactCTA whatsappUrl={WHATSAPP_URL} content={ptBR} />
      <Footer content={ptBR} />
      <WhatsAppButton whatsappUrl={WHATSAPP_URL} />
    </>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
