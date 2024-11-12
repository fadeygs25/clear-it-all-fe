// src/components/Point.tsx
import React from 'react';

interface PointProps {
  onClick: () => void;
}

const Point: React.FC<PointProps> = ({ onClick }) => {
  return (
    <div className="point" onClick={onClick}>
      {}
    </div>
  );
};

export default Point;
