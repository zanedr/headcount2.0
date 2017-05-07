import React from 'react';
import ReactDOM from 'react-dom';
import CompareCard from '../Components/CompareCard';
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

it('should have children elements',()=>{
  const wrapper = mount(<CompareCard info={{location1:"Shenma",location2:"Gringo"}}
  avg1={1} avg2={1} totalAvg={{}} />)
  expect(wrapper.find('div').length).toEqual(5)
})

it('should be able to take props and utilize them',()=>{
  const wrapper = mount(<CompareCard info={{location1:"Shenma",location2:"Gringo"}}
  avg1={1} avg2={1} totalAvg={{}} />)


  expect(wrapper.props()).toEqual({ info: { location1: 'Shenma', location2: 'Gringo' },
      avg1: 1,
      avg2: 1,
      totalAvg: {} })
})

it('can be clicked',()=>{
  const spy = jest.fn();
  const wrapper = shallow(<CompareCard info={{location1:"Denver",location2:"Yuma"}}
  avg1={1} avg2={1} totalAvg={{}} />)

      wrapper.simulate('click')

      expect(spy).toBeCalled();
})


})
