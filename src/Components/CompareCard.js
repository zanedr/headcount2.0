import React from 'react'
import PropTypes from 'prop-types';



export default function compareCard({info,totalAvg,avg1,avg2}){
  return(
    <div className ='average-compare'>
      <div className = 'top-of-card'>
      <h3>{info.location1}</h3>
      <p>{avg1}</p>
      </div>
      <div className="middle-of-card">
      <h3>Total Average</h3>
      {'<<'}  {totalAvg.compared}  {'>>'}
      </div>
      <div className = 'bottom-of-card'>
      <h3>{info.location2}</h3>
      <p>{avg2}</p>

      </div>
    </div>
  )
}


compareCard.PropTypes ={
  avg1: PropTypes.number,
  avg2: PropTypes.number,
  info: PropTypes.object,
  totalAvg: PropTypes.object
}
