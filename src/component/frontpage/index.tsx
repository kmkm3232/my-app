import React, { ReactNode } from 'react';
import logo from '../../logo.svg';
import { useNavigate  } from 'react-router-dom';
import { store } from "../../state/store";
import { actionOne } from '../../state/action';
import { useSelector, useDispatch } from 'react-redux';
import { BaseStore } from '../../state/interface';

const Frontpage: React.FC = () => {
  
  const dispatch = useDispatch();
  const currentState = useSelector<BaseStore,any>(store => store);

  //let navigate = useNavigate();
  const handleonClick = () => {
      dispatch(actionOne())
      console.log(12312)
      //navigate('/table')
  }
  return (
      <div className="App-header flex-1 p-4">
        <p className='text-white'>{currentState.testItem}</p>
        <img onClick={handleonClick} src={logo} className="App-logo" alt="logo"  />
      </div>
  );
};

export default Frontpage;
  