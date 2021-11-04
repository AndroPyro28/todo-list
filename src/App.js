import './App.css';
import React, {useState} from 'react';
import AddTask from './component/AddTask';
import CompletedTask from './component/CompletedTask';

function App() {
  
  const [completeItems, setCompletedItems] = useState([])

  return (
    <div className="App">
      <AddTask textHeader = "Let's Do Some Work Today" completeItems = {completeItems} appendCompletedItem = {setCompletedItems} />
      <CompletedTask textHeader = "Completed Tasks" completeItems = {completeItems} />
    </div>
  );
}

export default App;
