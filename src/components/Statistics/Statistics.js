import React, { useState, useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import callIcon from '../../images/call-icon.png';
import timeIcon from '../../images/time-icon.png';
import StatisticsCard from '../StatisticsCard/StatisticsCard';
import StatisticTable from '../StatisticsTable/StatisticTable';

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
    return Math.max.apply(null, arr);
  }

  function handleIdFilter(id) {
    setIdFiltered(data.filter((elm) => elm[4] === Number(id)));
    setIsOpened(true);
  }
  
  function getUniqueItem(index){
    const arrId = data.map((item)=>item[index]);
    const uniqueSet = new Set(arrId);
    return [...uniqueSet]
  }
  function handleChange(e) {
    setValue(e.target.value)
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
        <h2 className='statistics__header'>Статистика</h2>
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
            text='секунд самое длинное время ожидания ответа'
          />
        </div>
        <h3 className='statistics__title'>id оператора, принявшего звонок</h3>
        <div>
        <select className='statistics__select' defaultValue={value} onChange={handleChange}>
          {getUniqueItem(4).map((item)=>{
            return (
              <option key={item} value={item}>{item}</option>
            )
          })}
        </select>
        <button className='btn' onClick={() => handleIdFilter(value)}>Показать</button>
        </div>
        {isOpened ? (<StatisticTable key={idFiltered} idFiltered={idFiltered} getCurrentTimeFromStamp={getCurrentTimeFromStamp} />) : ''}
      </div>
    </section>
  );
}

export default Statistics;
