import React from 'react';

function UserPage() {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>You can now book your tickets.</p>
      <ul>
        <li>
          Flight 101 - Mumbai to Delhi - ₹5000 
          <button style={{ marginLeft: '10px' }}>Book</button>
        </li>
        <li>
          Flight 202 - Chennai to Bangalore - ₹3500 
          <button style={{ marginLeft: '10px' }}>Book</button>
        </li>
        <li>
          Flight 303 - Kolkata to Hyderabad - ₹4200 
          <button style={{ marginLeft: '10px' }}>Book</button>
        </li>
      </ul>
    </div>
  );
}

export default UserPage;
