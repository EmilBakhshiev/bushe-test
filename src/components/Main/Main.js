import React from 'react';
import { columnArray } from '../../utils/utils';
import HistoryCall from '../HistoryCall/HistoryCall';

function Main({
  paginationData,
  paginationBtns,
  historyCallOpened,
  historyCall,
  setIsOpened,
  getCurrentTimeFromStamp,
}) {
  return (
    <main className='main'>
      <table>
        <thead>
          <tr>
            {columnArray.map((el, index) => {
              return <th  key={index} className='table__head'>{el}</th>;
            })}
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th colSpan='6'>{paginationBtns}</th>
          </tr>
        </tfoot>
        <tbody>
          {paginationData}
          {/*data.map((item) => {
            return (
              <tr>
                <td
                  className='col__number'
                  onClick={() => handlePhoneClick(item[0])}
                >
                  {item[0]}
                </td>
                <td>{getCurrentTimeFromStamp(item[1])}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>{item[4]}</td>
              </tr>
            );
          })*/}
        </tbody>
      </table>
      <HistoryCall
        isOpened={historyCallOpened}
        historyCall={historyCall}
        getCurrentTimeFromStamp={getCurrentTimeFromStamp}
        setIsOpened={setIsOpened}
      />
    </main>
  );
}

export default Main;
