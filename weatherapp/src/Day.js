import React from 'react'
import './Day.css'

export default function Day(props) {
  const {date, temperature} = props;
    return (
    <div className='forecast-day'>
        <div>{date}</div>
        <div>{temperature}</div>
    </div>
  )
}
