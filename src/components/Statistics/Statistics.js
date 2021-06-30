import React, { useState, useContext, useCallback, useEffect } from 'react';
import { DataContext } from '../../contexts/DataContext';
import callIcon from '../../images/call-icon.png';
import timeIcon from '../../images/time-icon.png';
import StatisticsCard from '../StatisticsCard/StatisticsCard';
import StatisticTable from '../StatisticsTable/StatisticTable';
import logo from '../../images/logo.svg';

function Statistics({ isOpen, onClose, getCurrentTimeFromStamp }) {
  const data = useContext(DataContext);
  const [idFiltered, setIdFiltered] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  const [selectValue, setSelectValue] = useState(0);

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
  const getUniqueItem = useCallback(
    (index) => {
      const arrId = data.map((item) => item[index]);
      const uniqueSet = new Set(arrId);
      return [...uniqueSet];
    },
    [data]
  );

  useEffect(() => {
    getUniqueItem(4);
    setSelectValue(getUniqueItem(4)[0]);
  }, [getUniqueItem]);

  function handleSelectChange(e) {
    setSelectValue(e.target.value);
  }

  return (
    <section className={`detail ${isOpen && 'detail_opened'}`}>
      <div className='detail-nav'>
        <img src={logo} alt='Логотип' />
        <button className='btn' onClick={onClose}>
          Закрыть
        </button>
      </div>
      <div className='detail-container'>
        <h2 className='detail__header'>Статистика</h2>
        <div className='detail__card-wrapper'>
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
        <div className='detail__wrapper-filter'>
          <select
            className='statistics__select'
            defaultValue={selectValue}
            onChange={handleSelectChange}
          >
            {getUniqueItem(4).map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <button className='btn' onClick={() => handleIdFilter(selectValue)}>
            Показать
          </button>
        </div>
        {isOpened ? (
          <StatisticTable
            key={idFiltered}
            idFiltered={idFiltered}
            getCurrentTimeFromStamp={getCurrentTimeFromStamp}
          />
        ) : (
          ''
        )}
      </div>
    </section>
  );
}

export default Statistics;
