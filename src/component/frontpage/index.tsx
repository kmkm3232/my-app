import React from 'react';
import logo from '../../logo.svg';
import { useNavigate  } from 'react-router-dom';

export const Frontpage = () => {
    let navigate = useNavigate();
    const handleonClick = () => {
        navigate('/table')
    }

    return (
        <div className="App-header flex-1 p-4">
          <img onClick={handleonClick} src={logo} className="App-logo" alt="logo"  />
        </div>
    );
  };
  
  export default Frontpage;
  