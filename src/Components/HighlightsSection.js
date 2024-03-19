import React from "react";
import './HighlightsSection.css'
import Greeksalad from '../images/Greeksalad.jpg';
import Brushetta from '../images/Brushetta.jpg'
import Grilledfish from '../images/Grilled fish.jpg'

export default function HighlightsSection() {
  return (
    <section className="Highlights-Container">
      <h1>This Weeks Special’s</h1>
      <button class="btn">Reservar a table</button>
      <div className="card-container">
        <div className="card" id="card-1">
          <img src={Greeksalad} className="greek-salad" alt="Greek Salad" />
          <div className="card-body">
            <h2>Greek Salad</h2>
            <h3 className="price">$12.99</h3>
            <p className="card-text">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <h3 class="order-btn">Order a delivery</h3>
          </div>
        </div>
        <div className="card" id="card-2">
          <img src={Brushetta} className="Brushetta" alt="Brushetta" />
          <div className="card-body">
            <h2>Brushetta</h2>
            <h3 className="price">$7.99</h3>
            <p className="card-text">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <h3 className="order-btn">Order a delivery</h3>
          </div>
        </div>
        <div className="card" id="card-3">
          <img src={Grilledfish} className="grilled-fish" alt="Grilled fish" />
          <div className="card-body">
            <h2>Grilled Fish</h2>
            <h3 className="price">$19.99</h3>
            <p className="card-text">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <h3 className="order-btn">Order a delivery</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
