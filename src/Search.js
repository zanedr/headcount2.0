import React, { Component } from 'react'
import DistrictRepository from './helper'
import Card from './Card'


export const searchResults = (input) => {
  const found = Object.keys(this.state.data).map((location,i)=>{
    let active =  this.state.activeCards[0]==i||this.state.activeCards[1]==i?"2px":"0px"
      let info = this.state.data[location]
      return(
        <Card
        active={active}
        handleSelectCard={this.selectCard.bind(this)}
        key={i}
        index={i}
        location= {location}
        info={info} />
      )
    })
  return found
}

// const results = Object.keys(this.props.data).map((location,i)=>{
//  let active =  activeCards[0]==i||activeCards[1]==i?"2px":"0px"
//   let info = this.state.data[location]
//   return(
//     <Card
//     active={active}
//     handleSelectCard={this.selectCard.bind(this)}
//     key={i}
//     index={i}
//     location= {location}
//     info={info} />
//   )
// })

//   render({data}) {
//     return(
//       console.log(data)
//       <div>
//         <input className="search-input"
//                onChange={(e) => {
//           console.log(e.target.value)
//         }}/>
//         {results}
//         <h4>Search</h4>
//       </div>
//     )
//   }
// }
