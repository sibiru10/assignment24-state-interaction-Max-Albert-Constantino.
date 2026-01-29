import React from 'react';

const Task4FruitList = () => {
  const fruits = ["Apple", "Banana", "Cherry", "Mango", "Strawberry"];

  return (
    <div>
      <ul style={{ display: 'inline-block', textAlign: 'left', paddingLeft: '20px' }}>
        {fruits.map((fruit, index) => (
          <li key={index} style={{ marginBottom: '5px' }}>{fruit}</li>
        ))}
      </ul>
      <p style={{ marginTop: '10px' }}>
        <strong>Total Fruits:</strong> {fruits.length}
      </p>
    </div>
  );
};

export default Task4FruitList;