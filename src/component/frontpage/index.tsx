import React from 'react';
import logo from '../../logo.svg';
import { useNavigate  } from 'react-router-dom';

export const Frontpage = () => {
    let navigate = useNavigate();
    const handleonClick = () => {
        console.log('a18trg12')
        navigate('/table')
    }

    return (
        <header className="App-header">
        <img onClick={handleonClick} src={logo} className="App-logo" alt="logo"  />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          onClick={handleonClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
  };
  
  export default Frontpage;
  