import React from 'react';

function GuestPage() {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>Browse available flights below:</p>
      <ul>
        <li>Flight 101 - Mumbai to Delhi - ₹5000</li>
        <li>Flight 202 - Chennai to Bangalore - ₹3500</li>
        <li>Flight 303 - Kolkata to Hyderabad - ₹4200</li>
      </ul>
      <p><strong>Login to book your tickets.</strong></p>
    </div>
  );
}

export default GuestPage;
