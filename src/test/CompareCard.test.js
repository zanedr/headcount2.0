import React from 'react';
import ReactDOM from 'react-dom';
import CompareCard from '../Components/Card';
import { shallow, mount } from 'enzyme';

describe("CompareCard",()=>{

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompareCard info={{location1:"Denver",location2:"Yuma"}}
  avg1={1} avg2={1} totalAvg={{}} />, div);
});

const wrapper = shallow(<CompareCard info={{location1:"Denver",location2:"Yuma"}}
avg1={1} avg2={1} totalAvg={{}} />)

it('should have a class',()=>{
  expect(wrapper.is('.card')).toEqual(true);
})

it('should have a class',()=>{
  console.log(wrapper)
  expect(wrapper.is('.card')).toEqual(true);
})

})
