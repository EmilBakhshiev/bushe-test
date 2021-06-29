import api from './utils/api';
import { useEffect, useState } from 'react';
import {DataContext} from './contexts/DataContext'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Statistics from './components/Statistics/Statistics'
import './App.css';

function App() {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [isStatisticsModal, setIsStatisticsModal] = useState(false)
  useEffect(() => {
    api.getData().then((res) => {
      setColumns(res.columns);
      setData(res.data);
    });
  }, []);

function isStatisticsOpen() {
  setIsStatisticsModal(true)
}

function closeAllModals() {
  setIsStatisticsModal(false)
}


  return (
    <div className='App'>
      <DataContext.Provider value={data}>
      <Header statisticsModal={isStatisticsOpen}/>
      <Main
        colomun={columns}
        data={data}
      ></Main>
      <Statistics onClose={closeAllModals} isOpen={isStatisticsModal}/>
      </ DataContext.Provider>
    </div>
  );
}

export default App;
