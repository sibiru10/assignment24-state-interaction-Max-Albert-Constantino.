import React, { useState, useEffect } from 'react';

const InputChild = ({ value, onInputChange }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Input: </label>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => onInputChange(e.target.value)} 
        placeholder="Type something..."
        style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </div>
  );
};

const Task6LiftingState = () => {
  const [parentText, setParentText] = useState(() => {
    return localStorage.getItem("task6_text") || "";
  });

  useEffect(() => {
    localStorage.setItem("task6_text", parentText);
  }, [parentText]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>The Component</h3>
      
      <p style={{ marginBottom: '10px' }}>Output:</p>

      <div style={{ 
        color: 'rgb(255, 235, 12)', 
        fontWeight: 'bold',
        backgroundColor: 'black',   
        borderRadius: '10px',       
        padding: '10px 20px',       
        display: 'inline-block',    
        minWidth: '20px',           
        minHeight: '24px',
        maxWidth: '100%',           
        wordBreak: 'break-word',    
        boxSizing: 'border-box'     
      }}>
        {parentText || "..."} 
      </div>
      
      <InputChild 
        value={parentText} 
        onInputChange={setParentText} 
      />
    </div>
  );
};

export default Task6LiftingState;