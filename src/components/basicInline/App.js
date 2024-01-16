import React from 'react';

function App() {
    const [newcolor, setColor] = React.useState('white');
    
    function handleButtonClick(color){
        setColor(prevcolor=>color)
    }
    return (
    <div id="app">
      <h1 style={{color: newcolor ? newcolor:'white'}}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick = {()=>handleButtonClick('green')}>Yes</button>
        </li>
        <li>
          <button onClick = {()=>handleButtonClick('red')}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
