import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('');
  const [itemsList, setItemsList] = useState([]); // Initialize an empty array to store todo items

  function changeHandle(event) {
    const valueToList = event.target.value;
    setItem(valueToList);
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    setItemsList([...itemsList, item]); // Add the item to the itemsList array
    setItem(''); // Clear the input field
  }

  function handleDelete(index) {
    // Create a new array without the item at the specified index
    const updatedList = [...itemsList.slice(0, index), ...itemsList.slice(index + 1)];
    setItemsList(updatedList);
  }

  return (
    <div>
      <h1>Todo List App with React</h1>
      <form onSubmit={handleSubmit}>
        <input name="todoList" placeholder="Please Enter any Item" value={item} onChange={changeHandle} />
        <button type="submit">Submit</button>
      </form>

      <div id="output">
        <ul>
          {itemsList.map((value, index) => (
            <li key={index}>
              {value}
              <button onClick={() => handleDelete(index)}> Delete </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
