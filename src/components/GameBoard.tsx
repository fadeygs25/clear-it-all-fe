'use client';

import React, { useState } from 'react';
import StatusMessage from './StatusMessage';
import Point from './Point';

const GameBoard: React.FC = () => {
  const [points, setPoints] = useState(Array(6).fill(true)); 

  const removePoint = (index: number) => {
    setPoints((prevPoints) => {
      const newPoints = [...prevPoints];
      newPoints[index] = false;
      return newPoints;
    });
  };

  const allCleared = points.every((point) => point === false);

  return (
    <div className="game-board">
      {points.map((point, index) =>
        point ? (
          <Point key={index} onClick={() => removePoint(index)} />
        ) : null
      )}
      {allCleared && <StatusMessage message="ALL CLEARED" />}
    </div>
  );
};

export default GameBoard;
