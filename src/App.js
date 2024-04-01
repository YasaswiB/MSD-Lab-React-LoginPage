import React from 'react';
import './App.css';
import LoginForm from './LoginForm';
import Logo from './Logo';
import CompanyName from './CompanyName';

function App() {
  const handleLogin = (credentials) => {
    console.log('Login credentials:', credentials);
    // Here you can handle login logic, e.g., send to server for authentication
  };

  return (
    <div className="App">
      <div className="Header">
        <Logo />
        <CompanyName />
      </div>
      <div className="LoginContainer">
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
}

export default App;
