import React, { useEffect, useRef, useState } from "react";
import HeroSection from "../components/HeroSection";
import CardSection from "../components/CardSection";
import AboutSection from "../components/AboutSection";
import { FaqSection } from "../components/FaqSection";
import { PricingTable } from "../components/PricingTable";
import { PricingSlider } from "../components/PricingSlider";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import Testimonial from "../components/Testimonial";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  console.log(window.innerWidth);

  const cardRef = useRef(null);
  const pricingRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    const yOffset = -100; // Adjust this value as needed
    const y =
      ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        cardRef={cardRef}
        faqRef={faqRef}
        pricingRef={pricingRef}
        heroRef={heroRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <HeroSection sectionRef={heroRef} />
      <CardSection sectionRef={cardRef} />
      <AboutSection sectionRef={aboutRef} />
      <PricingTable sectionRef={pricingRef} />
      <ContactForm sectionRef={contactRef}/>
      <Testimonial/>
      <FaqSection sectionRef={faqRef} />
      <Footer />
    </>
  );
};

export default Home;
