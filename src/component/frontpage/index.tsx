import React, { ReactNode } from 'react';
import logo from '../../logo.svg';
import { useNavigate  } from 'react-router-dom';
import { store } from "../../state/store";
import { actionOne, actionTwo } from '../../state/action';
import { useSelector, useDispatch } from 'react-redux';
import { BaseStore } from '../../state/interface';
import Graph from '../graph';

const Frontpage: React.FC = () => {
  
  React.useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    ws.onmessage = (event) => {
      const newData = JSON.parse(event.data)
      console.log(newData)
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
        <p className='text-white p-3'>Current Voltage: {currentState.nodedetail[(currentState.nodedetail.length -1)].Voltage}V</p>
        <p className='text-white p-3'>TestItem: {currentState.testItem}</p>
        <img onClick={handleonClick} src={logo} className="App-logo" alt="logo"  />
        <Graph data={currentState} ></Graph>
      </div>
  );
};

export default Frontpage;
  