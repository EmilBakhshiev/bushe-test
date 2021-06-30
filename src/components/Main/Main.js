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
      <table className='table table_type_main'>
        <thead>
          <tr>
            {columnArray.map((el, index) => {
              return <th  key={index} className='table__head table__head_place_main'>{el}</th>;
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
