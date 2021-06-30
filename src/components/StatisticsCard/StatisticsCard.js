import React from 'react'

function StatisticsCard({icon, data, text}) {
    return (
        <div className='statistics__card'>
          <img className='statistics__card-image' src={icon} alt='Иконка'/>
          <div className='statistics__card-info'>
            <h3 className='statistics__card-title'>{data}</h3>
            <p className='statistics__card-subtitle'>{text}</p>
          </div>
        </div>
    )
}

export default StatisticsCard
