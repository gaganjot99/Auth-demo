import { useState } from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [status, setStatus] = useState("login");

  return (
    <div className="App">
      <header className="App-header">
        <h1 id='main-logo'>Secrets</h1>
        <nav>
          
        </nav>
      </header>
      <div id='main-body'>
        {status==="login"?<Login 
        setStatus={setStatus}
        />
        :
        <Signup 
        setStatus={setStatus}
        />}

      </div>
    </div>
  );
}

export default App;
