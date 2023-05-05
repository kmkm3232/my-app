import React, { ReactNode } from 'react';
import logo from '../../logo.svg';
import { useNavigate  } from 'react-router-dom';
import { store } from "../../state/store";
import { actionOne, actionTwo } from '../../state/action';
import { useSelector, useDispatch } from 'react-redux';
import { BaseStore } from '../../state/interface';

const Frontpage: React.FC = () => {
  
  React.useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    ws.onmessage = (event) => {
      const newData = Number(event.data);
      dispatch(actionTwo(newData));
    };
  }, []);

  const dispatch = useDispatch();
  const currentState = useSelector<BaseStore,any>(store => store);

  //let navigate = useNavigate();
  const handleonClick = () => {
      dispatch(actionOne())
      //navigate('/table')
  }
  return (
      <div className="App-header flex-1 p-4">
        <p className='text-white p-3'> Voltage: {currentState.Voltage}V</p>
        <p className='text-white p-3'>TestItem: {currentState.testItem}</p>
        <img onClick={handleonClick} src={logo} className="App-logo" alt="logo"  />
      </div>
  );
};

export default Frontpage;
  