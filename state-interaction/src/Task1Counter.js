import React, { useState } from 'react';

const Task1Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase +</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '0 10px' }}>Decrease -</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Task1Counter;