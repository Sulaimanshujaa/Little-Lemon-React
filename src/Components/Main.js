import React from "react";
import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import Testimonials from "./Testimonials";
import AboutSection from "./AboutSection";
// import '../Components/Main.css'

export default function Main() {
  return (
    <main>
      <HeroSection/>
      <HighlightsSection/>
      <Testimonials/>
      <AboutSection/>
    </main>
  );
}
