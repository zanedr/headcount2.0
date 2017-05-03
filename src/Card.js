import React,{Component} from 'react'
import PropTypes from 'prop-types';

export default class Card extends Component{
  render(){
  return(
    <div className="card"
    style={{border: this.props.active+ ` blue solid` }}
    onClick={()=>{this.props.handleSelectCard(this.props.info,this.props.location)}}>
      <h5>{this.props.location}</h5>
      {
        Object.keys(this.props.info).map((val,i)=>{
          let color;
          if(this.props.info[val]>.5){
            color = "blue"
          }else{
            color='red'
          }
          return(
          <li
          style={{color: color }}
          className="card-data"
          key={i}
          ><div className="card-info-year">{val}</div>
          <div className="card-info">
          {this.props.info[val]}
          </div>
          </li>
              )
        })
      }
    </div>
    )
  }
}

Card.defaultProp ={
  location:"Denver",
  key:1,
  index:1,
  info:{2004: 0.39196,
        2005: 0,
        2006: 0,
        2007: 0,
        2008: 0.19264,
        2009: 0.19,
        2010: 0.19744,
        2011: 0.203,
        2012: 0.18691,
        2013: 0,
        2014: 0.12982
      }
}

Card.PropTypes ={
  location:PropTypes.string,
}
