import React, { useState } from 'react';
import './App.scss';
import './styles/theme.scss';

function App() {
  // const [theme, setTheme] = useState('light');
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`App ${theme}`}>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
