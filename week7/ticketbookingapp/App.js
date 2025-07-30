import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let content;

  if (isLoggedIn) {
    content = <UserPage />;
  } else {
    content = <GuestPage />;
  }

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Ticket Booking App</h1>
      {content}
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: isLoggedIn ? '#f44336' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default App;
