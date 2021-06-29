import React, { useState, useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import callIcon from '../../images/call-icon.png';
import timeIcon from '../../images/time-icon.png';
import StatisticsCard from '../StatisticsCard/StatisticsCard';

function Statistics({ isOpen, onClose }) {
  const [idFiltered, setIdFiltered] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  const [value, setValue] = useState(Number);
  const data = useContext(DataContext);

  function getMaxNumCall() {
    const arr = data.map((el) => el[3]);
    return Math.floor(Math.max.apply(null, arr) / 60);
  }
  function getMaxWait() {
    const arr = data.map((el) => el[2]);
    return Math.min.apply(null, arr);
  }

  function handleIdFilter(id) {
    setIdFiltered(data.filter((elm) => elm[4] === id));
    setIsOpened(true);
  }
  function getCurrentTimeFromStamp(timestamp) {
    return new Date(timestamp * 1000).toLocaleString();
  }
  

  return (
    <section className={`statistics ${isOpen && 'statistics_opened'}`}>
      <button className='close' onClick={onClose}>
        Закрыть
      </button>

      <div className='statistics__container'>
        <h2 className='statistics__title'>Статистика</h2>
        <div className='statistics__card-wrapper'>
          <StatisticsCard
            icon={callIcon}
            data={data.length}
            text='Звонков всего'
          />
          <StatisticsCard
            icon={timeIcon}
            data={getMaxNumCall()}
            text='минуты самый длинный разговор'
          />
          <StatisticsCard
            icon={timeIcon}
            data={getMaxWait()}
            text='секунда самое короткое время ожидания'
          />
        </div>
        <label className='label__input'>
          id оператора, принявшего звонок
          <input
            type='number'
            onChange={(e) => setValue(e.target.value)}
          ></input>
        </label>
        <button onClick={() => handleIdFilter(value)}>Показать</button>
        {/*
            <table>
            <tbody>
              {idFiltered.map((item) => {
                return (
                  <tr>
                    <td className='history-call__row'>
                      {getCurrentTimeFromStamp(item[1])}
                    </td>
                    <td className='history-call__row'>{item[2]}</td>
                    <td className='history-call__row'>{item[3]}</td>
                    <td className='history-call__row'>{item[4]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
            */}
          
      </div>
    </section>
  );
}

export default Statistics;
