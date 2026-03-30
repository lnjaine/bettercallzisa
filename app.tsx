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

const WHATSAPP_NUMBER = "5521998595821";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Zisa, I have a problem that needs to disappear. Here's the situation:")}`;

export default function App() {
  return (
    <>
      <Navbar whatsappUrl={WHATSAPP_URL} />
      <Hero whatsappUrl={WHATSAPP_URL} />
      <Services />
      <CaseStudies />
      <About whatsappUrl={WHATSAPP_URL} />
      <Testimonials />
      <ContactCTA whatsappUrl={WHATSAPP_URL} />
      <Footer />
      <WhatsAppButton whatsappUrl={WHATSAPP_URL} />
    </>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
