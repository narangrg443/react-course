import React from 'react';
//import './style.css'; // Import the CSS file for styling

function App({ login }) {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-container">
        <input type="text" className="input-field" placeholder="Username" />
        <input type="password" className="input-field" placeholder="Password" />
      </div>
      <div className="button-container">
        <button className="button">
          {login ? 'Logging In' : 'Register'}
        </button>
      </div>
    </div>
  );
}

export default App;
