import React, { useState } from 'react';

function App() {
  // State to manage the list and the input value
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  // Function to handle adding a new item
  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]); // Add new item to the list
      setNewItem(''); // Clear the input field
    }
  };

  // Function to handle deleting an item
  const deleteItem = (indexToDelete) => {
    setItems(items.filter((_, index) => index !== indexToDelete)); // Remove the item at the given index
  };

  return (
    <div style={styles.container}>
      <h1>Simple React List of Items</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add a new item"
        style={styles.input}
      />
      <button onClick={addItem} style={styles.button}>
        Add
      </button>
      <ul style={styles.list}>
        {items.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item}
            <button
              onClick={() => deleteItem(index)} // Call deleteItem with the index
              style={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Inline styles for better visuals
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  input: {
    padding: '10px',
    width: '70%',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  list: {
    marginTop: '20px',
    textAlign: 'left',
  },
  listItem: {
    padding: '5px 0',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default App;
