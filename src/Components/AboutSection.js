import React from "react";
import Image1 from "../images/Mario and Adrian A.jpg";
import Image2 from "../images/restaurant chef B.jpg";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section class="about-section">
      <div className="body-content">
        <h1 class="h-primary">Little Lemon</h1>
        <h2>Chichago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem qui
          nihil, cumque sint similique voluptas quae reiciendis assumenda eius
          veritatis id sit maxime consequatur aperiam. Dolore quibusdam corporis
          blanditiis explicabo. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Rem qui nihil, cumque sint similique voluptas quae
          reiciendis assumenda eius veritatis id sit maxime consequatur aperiam.
          Dolore quibusdam corporis blanditiis explicabo.
        </p>
      </div>
      <div className="images-container">
        <img src={Image2} alt="Mario and Adrian A" id="image-1" />
      </div>
      <div className="images-container">
        <img src={Image1} alt="restaurant chef B" id="image-2" />
      </div>
    </section>
  );
}
