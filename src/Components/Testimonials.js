import React from "react";
import "./Testimonials.css";
import Image1 from "../images/image1.jpg";
import Image2 from "../images/Image2.jpg";
import Image3 from "../images/Image3.jpg";

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <h1>Testimonials</h1>
      <div className="review-container">
        <div className="review" id="review-1">
          <img src={Image1} alt="avatar" />
          <h2>Ruby Erin</h2>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <span>02.01.2023</span>
          <p>
            “I recently had the pleasure of dining at Little Lemon, a
            family-owned Mediterranean restaurant, and I must say, I was
            thoroughly impressed. From the moment I walked in, I was greeted
            with warm smiles and a cozy atmosphere. The restaurant had a modern
            yet inviting feel, with beautiful decor and soft lighting.”
          </p>
        </div>
        <div className="review" id="review-2">
          <img src={Image2} alt="avatar" />
          <h2>Jean Smith</h2>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <span>02.01.2023</span>
          <p>
            “I recently had the pleasure of dining at Little Lemon, a
            family-owned Mediterranean restaurant, and I must say, I was
            thoroughly impressed. From the moment I walked in, I was greeted
            with warm smiles and a cozy atmosphere. The restaurant had a modern
            yet inviting feel, with beautiful decor and soft lighting.”
          </p>
        </div>
        <div className="review" id="review-3">
          <img src={Image3} alt="avatar" />
          <h2>Maeve Mark</h2>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <span>24.01.2022</span>
          <p>
            “I recently had the pleasure of dining at Little Lemon, a
            family-owned Mediterranean restaurant, and I must say, I was
            thoroughly impressed. From the moment I walked in, I was greeted
            with warm smiles and a cozy atmosphere. The restaurant had a modern
            yet inviting feel, with beautiful decor and soft lighting.”
          </p>
        </div>
      </div>
    </section>
  );
}
