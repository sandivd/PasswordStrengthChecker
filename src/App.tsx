import React from 'react';
import PasswordStrengthChecker from './passwordStrengthOpus4';
import ThemeToggle from './ThemeToggle'; // <-- 1. Import ThemeToggle
import './App.css';
import './index.css';

function App() {
  return (
    // 2. Add a relative container to position the button against
    <div className="App relative"> 
      {/* 3. Add the toggle button here, positioned absolutely */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      {/* Your main content remains the same */}
      <PasswordStrengthChecker />
    </div>
  );
}

export default App;

