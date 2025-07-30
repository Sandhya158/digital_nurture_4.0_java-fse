import React from 'react';

function App() {
  // Office data
  const officeList = [
    {
      name: "Sky Tower",
      rent: 55000,
      address: "123 Skyline Road, Bangalore",
      image: "https://tse4.mm.bing.net/th/id/OIP.m8KMvpAbwq0NZpKBVQFyHgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      name: "Ocean View",
      rent: 75000,
      address: "78 Beachfront Lane, Mumbai",
      image: "https://tse2.mm.bing.net/th/id/OIP.Gi987c27leGBPcVhu6BNpgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      name: "Urban Hub",
      rent: 60000,
      address: "456 Tech Park, Hyderabad",
      image: "https://tse3.mm.bing.net/th/id/OIP.F9HMrRyvFTR5uC8HLwGnbgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];

  // Inline styling based on rent
  const getRentStyle = (rent) => ({
    color: rent > 60000 ? 'green' : 'red',
    fontWeight: 'bold'
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Office Space Rental App</h1>
      {officeList.map((office, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
          <h2>{office.name}</h2>
          <img src={office.image} alt={office.name} width="300" height="200" />
          <p><strong>Address:</strong> {office.address}</p>
          <p style={getRentStyle(office.rent)}><strong>Rent:</strong> ₹{office.rent}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
