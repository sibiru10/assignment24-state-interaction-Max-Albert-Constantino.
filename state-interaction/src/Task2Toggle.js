import React, { useState } from 'react';

const Task2Toggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>
      
      {isVisible && (
        <div style={{ marginTop: '15px' }}>
          <p style={{ 
            color: 'rgb(255, 235, 12)', 
            fontWeight: 'bold',
            backgroundColor: 'black',   
            borderRadius: '10px',       
            padding: '10px 20px',       
            display: 'inline-block',    
            margin: 0                   
          }}>
            Hello React!
          </p>
        </div>
      )}
    </div>
  );
};

export default Task2Toggle;