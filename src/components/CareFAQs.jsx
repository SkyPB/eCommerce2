import React from "react";
import "../css/carefaq.css";

export default function CareFAQs() {
  return (
    <section className="careFaq">
      <h2>Candle Care FAQ</h2>
      <div className="faq-item">
        <h3>How long should I burn my candle?</h3>
        <p>
          We recommend burning your candle for no more than 4 hours at a time to
          ensure a clean and even burn.
        </p>
      </div>
      <div className="faq-item">
        <h3>How do I avoid tunneling?</h3>
        <p>
          Allow the candle to burn until the entire surface has melted evenly.
          This prevents tunneling and ensures the best use of the wax.
        </p>
      </div>
      <div className="faq-item">
        <h3>What is the best way to trim the wick?</h3>
        <p>
          Trim the wick to about 1/4 inch before each burn. This helps prevent
          excessive smoking and soot.
        </p>
      </div>
    </section>
  );
}
