import React from "react";
import "../css/footer.css";

export default function Footer() {
  return (
    <footer>
      <section className="footer-container">
        <h3>Subscribe to Our Newsletter for 10% off</h3>
        <p>Stay updated with the latest scents and offers!</p>
        <form id="newsletter-form">
          <input
            type="email"
            required
            id="email"
            className="form-input"
            placeholder="email@gmail.com"
            pattern=""
          />
          <button>Submit</button>
        </form>
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="https://www.instagram.com/essentialxscents/">Instagram</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">TikTok</a>
          </li>
        </ul>
        <div className="footer-bottom">
          <p>&copy; 2024 Essential Scents. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
}
