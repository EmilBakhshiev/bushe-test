import React from 'react';
import logo from '../../images/logo.svg';

function HistoryCall({
  isOpened,
  historyCall,
  getCurrentTimeFromStamp,
  setIsOpened,
}) {
  return (
    <div className={`detail ${isOpened && 'detail_opened'}`}>
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
      <div className='detail-container'>
        <dl>
          <dt className='detail__title'>История звонков номера:</dt>
          <dd className='detail__phone'>{historyCall.map((arr) => arr[0])[0]}</dd>
        </dl>
        <table>
          <tbody>
            {historyCall.map((item) => {
              return (
                <tr>
                  <td className='modal-table__row'>
                    {getCurrentTimeFromStamp(item[1])}
                  </td>
                  <td className='modal-table__row'>{item[2]}</td>
                  <td className='modal-table__row'>{item[3]}</td>
                  <td className='modal-table__row'>{item[4]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HistoryCall;
