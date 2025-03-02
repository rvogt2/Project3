import React, { useState } from 'react';
import './App.css';

let totalTasks = 0;



export default function App() {
  const [input,setInput] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (input === ''){
      alert('field can not be left empty');
    } else {
        totalTasks+=1;
        setItems([...items, { id: (input), checked: false }]);
      }
    }

  const handleCheckboxChange = (id, checked) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked } : item
      )
    );
  };

  const handleDeleteItem = () => {
    setItems(items.filter((item) => item.checked === false));
    totalTasks = (items.filter((item) => item.checked === false)).length;
  };

  function handleChange(e){
    setInput(e.target.value);
  }

  return (
    <div id="to-doContainer">
      <h1>Things to do... things to do...</h1>
      <div id="inputSection">
      <input type='text' value={input} onChange={handleChange}></input>
      <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul id="list">
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.id}</span>
            <input
              className='check'
              type="checkbox"
              checked={item.checked}
              onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
            />
          </li>
        ))}
      </ul>
      <div id="controls">
        <div>
          <button onClick={() => handleDeleteItem(items.id)}>Mark Selected as Completed</button>
        </div>
        <div>
          We have {totalTasks} things left to do.</div>
      </div>
      <br/>
        <footer>Credit to Rhyse Vogt, as Project 3 for UTA Quickstart</footer>
    </div>
  );
  
}