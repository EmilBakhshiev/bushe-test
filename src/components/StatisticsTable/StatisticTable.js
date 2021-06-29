import React from 'react'

function StatisticTable({idFiltered, getCurrentTimeFromStamp}) {
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan='3'>Всего принято звонков: {idFiltered.length}</th>
                </tr>
            </thead>
            <tbody>
              {idFiltered.map((item) => {
                return (
                  <tr>
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
