import React, { Component } from 'react';
import './App.css';
import kinderData from '../data/kindergartners_in_full_day_program.js'
import DistrictRepository from  './helper.js'
import Card from "./Card"
import css from "./App.css"

class App extends Component {
  constructor() {
    super()

    let dataConfig = new DistrictRepository(kinderData)

    this.state= {
      data                    : dataConfig.data,
      findByName              : dataConfig.findByName,
      findAllMatches          : dataConfig.findAllMatches,
      findAverage             : dataConfig.findAverage,
      compareDistrictAverages : dataConfig.compareDistrictAverages,
      makeNumber              : dataConfig.makeNumber,
      splitter                : dataConfig.splitter,
      selectedCards           : [],
        }
      }

    selectCard(info,location){
       if(this.state.selectedCards[1]) {
         let presentLocation = this.state.selectedCards[1].location
         if(location == presentLocation){
           alert('Please choose a different card')
         }
       }
          let tempArr = this.state.selectedCards
          if(tempArr.length>=2){
            tempArr.shift()
            tempArr.push({info:info,location:location})
            this.setState({selectedCards:tempArr})
            }else{
            tempArr.push({info:info,location:location})
            this.setState({selectedCards:tempArr})
        }
    }

    renderComparision(){
      let tempArr = this.state.selectedCards


      return(
        <div className="comparison-cards-container">
        {tempArr.map((info,i)=>{

          return (
              <Card
              active = {true}
              handleSelectCard={this.selectCard.bind(this)}
              key={i}
              index={i}
              location= {info.location}
              info={info.info} />
              )
            })
          }
        </div>
      )
    }

  render() {
  let activeCards = []
  let tempArr = this.state.selectedCards

    Object.keys(this.state.data).forEach((obj,i)=>{
      if(tempArr[0]){
        if(tempArr[0].location.toLowerCase()==obj.toLowerCase()){
          activeCards.push(i)
        }
      }

        if(tempArr[1]){
          if(tempArr[1].location.toLowerCase()==obj.toLowerCase()){
          activeCards.push(i)
          }
          }
        })


    return (
      <main className="main-container">
        <div>Welcome To Headcount 2.0</div>

        {this.renderComparision()}
          <div className="card-container">
        {
          Object.keys(this.state.data).map((location,i)=>{
           let active =  activeCards[0]==i||activeCards[1]==i?"2px":"0px"
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
        }
        </div>
      </main>
    )
  }
}

export default App;
