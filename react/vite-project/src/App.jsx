import React from 'react';
import { useState } from 'react';
import { LoginForm } from './Componentes/LoginForm.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoginForm />
    </>
  );
}

export default App;