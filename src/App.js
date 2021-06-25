import api from './utils/api';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.css';

function App() {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [historyCall, setHistoryCall] = useState([]);
  useEffect(() => {
    api.getData().then((res) => {
      setColumns(res.columns);
      setData(res.data);
    });
  }, []);

  function getCurrentTimeFromStamp(timestamp) {
    let date = new Date(timestamp * 1000);
    let mounth = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (mounth < 10) {
      mounth = '0' + mounth;
    }
    if (day < 10) {
      day = '0' + day;
    }
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    let timeStampCon =
      day + '.' + mounth + '.' + year + ' ' + hours + ':' + minutes;
    return timeStampCon;
  }
  function handleNumberClick(e){
   const phone = e.currentTarget.textContent
   const arr = data.filter((elm) => elm[0] === phone);
   console.log(arr);
}

  return (
    <div className='App'>
      <Main
        colomun={columns}
        data={data}
        getCurrentTimeFromStamp={getCurrentTimeFromStamp}
        handleNumberClick={handleNumberClick}
      ></Main>
    </div>
  );
}

export default App;
