
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/App';
import { shallow, mount } from 'enzyme';


describe("App",()=>{

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('contains cards',()=>{
  const wrapper = shallow(<App/>)
  expect(wrapper.find("Card").length).toEqual(181)
  expect(wrapper.find("Card").node.type.defaultProp.location).toEqual("Denver")
})

it('contains a main element',()=>{
  const wrapper = shallow(<App/>)
  expect(wrapper.find("main").length).toEqual(1)
  expect(wrapper.find("main").node.type).toEqual('main')
})

it('has a class',()=>{
  const wrapper = shallow(<App/>)
  expect(wrapper.is('.main-container')).toEqual(true);
})

it('has elements when created',()=>{
  const wrapper = mount(<App/>)
  expect(wrapper.find("div").length).toEqual(4166)
})

it('has state',()=>{
  const wrapper = shallow(<App/>)
  expect(wrapper.state().findAllMatchesResults).toEqual({})
  expect(wrapper.state().selectedCards).toEqual([])
  expect(wrapper.state().query).toEqual('')

})

it('after cards are clicked, it will be added to the state',()=>{
  const wrapper = mount(<App />)
  expect(wrapper.state().selectedCards).toEqual([])
  let Card1 = wrapper.find('.card').first()
  Card1.simulate('click')

   let expectedState = [ { info:
         { '2004': 0.24,
           '2005': 0.28,
           '2006': 0.34,
           '2007': 0.39,
           '2008': 0.54,
           '2009': 0.6,
           '2010': 0.64,
           '2011': 0.67,
           '2012': 0.69,
           '2013': 0.7,
           '2014': 0.74 },
        location: 'Colorado' } ]

expect(wrapper.state().selectedCards).toEqual(expectedState)


  let Card2 = wrapper.find('.card').last()
  Card2.simulate('click')

  let newExpectedState =     [ { info:
         { '2004': 0.24,
           '2005': 0.28,
           '2006': 0.34,
           '2007': 0.39,
           '2008': 0.54,
           '2009': 0.6,
           '2010': 0.64,
           '2011': 0.67,
           '2012': 0.69,
           '2013': 0.7,
           '2014': 0.74 },
        location: 'Colorado' },
      { info:
         { '2004': 0,
           '2005': 1,
           '2006': 1,
           '2007': 1,
           '2008': 1,
           '2009': 1,
           '2010': 1,
           '2011': 1,
           '2012': 1,
           '2013': 1,
           '2014': 1 },
        location: 'YUMA SCHOOL DISTRICT 1' } ]

expect(wrapper.state().selectedCards).toEqual(newExpectedState)
})

it('should have a new list for the state to render after running a search',()=>{

const wrapper = mount(<App/>)
expect(wrapper.state().findAllMatches().length).toEqual(181)

expect(wrapper.state().findAllMatches("colorado").length).toEqual(2)
})

it('should find the average for the selectedCards',()=>{
  const wrapper = mount(<App/>)

  wrapper.find('.card').first().simulate('click')

  wrapper.find('.card').last().simulate('click')

let selectedCard1 = wrapper.state().selectedCards[0].location

let selectedCard2 = wrapper.state().selectedCards[1].location


  expect(wrapper.state().findAverage(selectedCard1)).toEqual(0.53)

  expect(wrapper.state().findAverage(selectedCard2)).toEqual(0.91)
})

it('should find the compartive average for the selected cards',()=>{
  const wrapper = mount(<App/>)
  wrapper.find('.card').first().simulate('click')
  wrapper.find('.card').last().simulate('click')
  let selectedCard1 = wrapper.state().selectedCards[0].location
  let selectedCard2 = wrapper.state().selectedCards[1].location

  let expected =  { COLORADO: 0.53,
      'YUMA SCHOOL DISTRICT 1': 0.91,
      compared: 0.58 }
  expect(wrapper.state().compareDistrictAverages(selectedCard1,selectedCard2)).toEqual(expected)

})




});
