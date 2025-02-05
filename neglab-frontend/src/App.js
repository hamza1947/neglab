import logo from './logo.svg';
import './App.css';
import { Chip } from '@mui/material';
import { useState } from 'react';
import { Home } from './pages/Home';

function App() {
  const [email, setEmail] = useState('');

  const handleEmailChange = () => {
  };

  

  return (
    <div className="App">
<Home/>
    </div>



  );
}

export default App;
