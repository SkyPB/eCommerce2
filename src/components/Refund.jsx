import React from "react";
import "../css/refund.css";

export default function RefundPolicy() {
  return (
    <section className="refund-policy">
      <h1>Refund Policy</h1>
      <div className="policy-card">
        <h3>Damaged or Defective Items</h3>
        <p>
          If your product arrives damaged or defective, you are eligible for a
          refund or replacement. Please contact us within 7 days of delivery
          with:
        </p>
        <div>
          <ul>
            <li>A description of the issue</li>
            <li>Photos of the damaged or defective item and its packaging</li>
          </ul>
        </div>
      </div>
      <div className="policy-card">
        <h3>Incorrect Order</h3>
        <p>
          If you receive an incorrect item, we will gladly offer a replacement
          or refund. Please contact us within 7 days of delivery.
        </p>
      </div>
      <div className="policy-card">
        <h3>Non-Returnable Items</h3>
        <p>
          For hygienic reasons, the following items are not eligible for returns
          or refunds unless defective or incorrect:
        </p>
        <div>
          <ul>
            <li>Used candles</li>
            <li>Wax melts or room sprays</li>
            <li>Products purchased on sale or during special promotions</li>
          </ul>
        </div>
      </div>
      <div className="policy-card">
        <h3>Refund Process</h3>
        <p>
          Approved refunds will be issued to your original method of payment
          within 7-10 business days of approval. If you choose a replacement
          instead, we will ship the replacement product at no additional cost.
        </p>
      </div>
    </section>
  );
}
