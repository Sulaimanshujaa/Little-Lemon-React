import React from "react";
import "./HeroSection.css";
import heroimage from "../restauranfood.jpg";

export default function HeroSection() {
  return (
    <section className="Hero-Container">
      <div className="title">
        <h1>Little Lemon</h1>
        <h2>Chichago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="btn">Reserve a table</button>
      </div>
      <div className="hero-image">
        <img src={heroimage} alt="food" />
      </div>
    </section>
  );
}
