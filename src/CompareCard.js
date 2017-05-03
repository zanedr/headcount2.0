import React from 'react'



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

// <h3>{this.props.info.location1}</h3>

// <h3>{this.props.info.location2}</h3>




// <div className = 'top-of-card'
//   <h3>{this.props.info.location1}</h3>
//   <p>{this.props.info.average1}</p>
// </div>
// <p>{this.props.totalAverage}</p>
// <div className = 'bottom-of-card'>
//   <h3>{this.props.location2}</h3>
//   <p>{this.props.average2}</p>
// </div>
