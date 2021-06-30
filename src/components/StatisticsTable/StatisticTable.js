import React from 'react'

function StatisticTable({idFiltered, getCurrentTimeFromStamp}) {
    return (
        <table className='table'>
            <thead className='table__head'>
                <tr>
                    <th colSpan='4' className='modal-table__head'>Всего принято звонков: {idFiltered.length}</th>
                </tr>
            </thead>
            <tbody>
              {idFiltered.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className='modal-table__row'>{item[0]}</td>
                    <td className='modal-table__row'>
                      {getCurrentTimeFromStamp(item[1])}
                    </td>
                    <td className='modal-table__row'>{item[2]}</td>
                    <td className='modal-table__row'>{item[3]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
    )
}

export default StatisticTable
