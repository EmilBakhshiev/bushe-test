import React from 'react';
import { columnArray } from '../../utils/utils';
import { useEffect, useState } from 'react';

function Main({ colomun, data }) {
  const [historyCall, setHistoryCall] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  

  function handleNumberClick(phone) {
    setHistoryCall(data.filter((elm) => elm[0] === phone));
    setIsOpened(true);
  }
 

  function getCurrentTimeFromStamp(timestamp) {
    return new Date(timestamp * 1000).toLocaleString();
  }
   
  return (
    <main>
      <table>
        <thead>
          <tr>
            {columnArray.map((el) => {
              return <th className='table__head'>{el}</th>;
            })}
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th colSpan='6'>Буше есть настоящее</th>
          </tr>
        </tfoot>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <td
                  className='col__number'
                  onClick={() => handleNumberClick(item[0])}
                >
                  {item[0]}
                </td>
                <td>{getCurrentTimeFromStamp(item[1])}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>{item[4]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={`detail ${isOpened && 'detail_opened'}`} >
        <div className='detail-container'>
          <dl>
            <dt>История звонков номера:</dt>
            <dd>{historyCall.map((arr) => arr[0])[0]}</dd>
          </dl>
          <table>
            <tbody>
              {historyCall.map((item) => {
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
        </div>
        <div className='detail-nav'>
          <button
            className='close'
            onClick={() => {
              setIsOpened(false);
            }}
          >
            Закрыть
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
