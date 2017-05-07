
import React, { Component } from 'react';
import kinderData from '../../data/kindergartners_in_full_day_program.js'
import DistrictRepository from  '../helper.js'
import Card from "./Card"
import CompareCard from './CompareCard'
import Search      from '../Search'
import dataSource  from '../dataSource'
import OptionsList from './OptionsList'

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
      findAllMatchesResults   : {},
      query                   : '',
      Search                  :Search
        }
      }

  selectDataSource(input){
    let newData = dataSource(input)
    let newDataConfig = new DistrictRepository(newData)
    this.setState({data:newDataConfig.data, selectedCards:[],activeCards:[]})
  }

  selectCard(info,location){
      if(this.state.selectedCards.length==1){
    if(this.state.selectedCards[0].location==location){
      this.setState({selectedCards:[]})
      return
    }
}

    if(this.state.selectedCards.length === 2) {

      let cardOneLocation = this.state.selectedCards[0].location || ''
      let cardTwoLocation = this.state.selectedCards[1].location || ''

      if(location == cardOneLocation){
        this.state.selectedCards.shift()
        this.setState(this.state.selectedCards)
        return
      }
      else if (location == cardTwoLocation) {
        this.state.selectedCards.pop()
        this.setState(this.state.selectedCards)
        return
      }
    }
      let tempArr = this.state.selectedCards
      if (tempArr.length>=2) {
        tempArr.shift()
        tempArr.push({info:info,location:location})
        this.setState({selectedCards:tempArr})
        }else{
        tempArr.push({info:info,location:location})
        this.setState({selectedCards:tempArr})
      }
    }

  renderComparision(averageInfo){
    let tempArr = this.state.selectedCards
    return(
      <div className="comparison-cards-container">
      {tempArr.map((info,i)=>{
          if (i == 1) {
            let avg1 = this.state.findAverage(averageInfo.location1)
            let avg2 = this.state.findAverage(averageInfo.location2)
            let totalAvg = this.state.compareDistrictAverages(averageInfo.location1,averageInfo.location2)

            return(
              <div className ="compare-info-container" >
                <CompareCard info={averageInfo} avg1={avg1} avg2={avg2} totalAvg={totalAvg}/ >
                <Card
                  active = {"blue"}
                  key={i}
                  handleSelectCard={this.selectCard.bind(this)}
                  index={i}
                  location= {info.location}
                  info={info.info} />
              </div>
            )
          }
        return (
            <Card
            key={i}
            active = {"blue"}
            handleSelectCard={this.selectCard.bind(this)}
            index={i}
            location= {info.location}
            info={info.info} />
            )
          })
        }
      </div>
    )
  }

  searched(input, query) {
    let found = {}
    if (!input.length && !query) {
      found = this.state.data
    }
    else if(!input.length && query) {
      return <h4>No results found</h4>
    }
    Object.keys(input).forEach(val => {
      Object.keys(input[val]).forEach(back => {
        found[back] = input[val][back]
      })
    })
    return this.searchRender(found)
  }

  searchRender(found){
    let active;
    let searched = Object.keys(found).map((location,i) => {

      if (this.state.selectedCards[0] && !this.state.selectedCards[1]) {
        active = this.state.selectedCards[0].location == location ? "blue":"red"
      }
      if (this.state.selectedCards[0] && this.state.selectedCards[1]) {
        active = this.state.selectedCards[0].location == location || this.state.selectedCards[1].location == location ? "blue":"red"
      }
        let info = this.state.data[location]
        let average = this.state.findAverage(location)
        return (
          <Card
            average={average}
            active={active}
            handleSelectCard={this.selectCard.bind(this)}
            key={i}
            index={i}
            location= {location}
            info={info} />
        )
      })
    return searched
  }

  renderSelectedCards(averageInfo) {
    let tempArr = this.state.selectedCards
      Object.keys(this.state.data).forEach((obj,i)=>{
        if (tempArr[0]) {
          if(tempArr[0].location.toLowerCase() == obj.toLowerCase()){
            averageInfo.location1=tempArr[0].location
            averageInfo.info1=tempArr[0].info

          }
        }
        if (tempArr[1]) {
          if (tempArr[1].location.toLowerCase() == obj.toLowerCase()) {
            averageInfo.location2 = tempArr[1].location
            averageInfo.info2 = tempArr[1].info
          }
        }
      })
      return averageInfo
  }

  render() {
    let average = {}
    let averageInfo = this.renderSelectedCards(average)

    return (
      <main className="main-container">
        <div className="page-title">Welcome To Headcount 2.0</div>

        {this.renderComparision(averageInfo)}

        <input placeholder="Search" onChange={(e) => {
          this.state.query = e.target.value
          this.state.findAllMatchesResults = this.state.findAllMatches(e.target.value)
          this.setState(this.state.findAllMatchesResults)
        }}/>

        <OptionsList selectDataSource={this.selectDataSource.bind(this)}/>

          <div className="card-container">
        {
        this.searched(this.state.findAllMatchesResults, this.state.query)
        }
        </div>
      </main>
    )
  }
}

export default App;
