import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 45 },
    { name: "KL Rahul", score: 60 },
    { name: "Rishabh Pant", score: 72 },
    { name: "Hardik Pandya", score: 50 },
    { name: "Shubman Gill", score: 90 },
    { name: "Ravindra Jadeja", score: 30 },
    { name: "Jasprit Bumrah", score: 75 },
    { name: "Mohammed Shami", score: 55 },
    { name: "Yuzvendra Chahal", score: 40 },
    { name: "Axar Patel", score: 95 }
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
