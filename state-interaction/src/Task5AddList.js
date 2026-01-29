import React, { useState, useEffect } from 'react';
import './App.css'; 

const Task5AddList = () => {

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("task5_final_list");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("task5_final_list", JSON.stringify(items));
  }, [items]);

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]); 
      setInputValue(""); 
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: '15px' }}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Type a new task..."
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        <button 
          onClick={handleAdd} 
          className="styled-button"
          style={{ marginLeft: '5px' }}
        >
          Add
        </button>
      </div>

      <ul style={{ 
        display: 'inline-block', 
        textAlign: 'left', 
        backgroundColor: 'black',
        color: 'rgb(255, 235, 12)', 
        fontWeight: 'bold',
        borderRadius: '10px',
        padding: '20px 40px',       
        maxWidth: '100%',
        boxSizing: 'border-box',
        minWidth: '100px'
      }}>
        {items.length === 0 ? (
          <li style={{ listStyleType: 'none' }}>...</li>
        ) : (
          items.map((item, index) => (
            <li key={index} style={{ marginBottom: '5px', wordBreak: 'break-word' }}>
              {item}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Task5AddList;