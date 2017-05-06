
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
  const spy = jest.fn();
  expect(wrapper.state().selectedCards).toEqual([])
  let Card1 = wrapper.find('.card').first()
  Card1.simulate('click')

  let expectedState =  [{"info": {"2004": "0.240", "2005": "0.278", "2006": "0.337", "2007": 0, "2008": "0.536", "2009": "0.598", "2010": "0.640", "2011": "0.672", "2012": "0.695", "2013": "0.703", "2014": "0.741"}, "location": "Colorado"}]

  let Card2 = wrapper.find('.card').last()
  Card2.simulate('click')

  let newExpectedState = [{"info": {"2004": 0.24, "2005": 0.278, "2006": 0.337, "2007": 0, "2008": 0.536, "2009": 0.598, "2010": 0.64, "2011": 0.672, "2012": 0.695, "2013": 0.703, "2014": 0.741}, "location": "Colorado"}, {"info": {"2004": 0, "2005": 1, "2006": 1, "2007": 0, "2008": 1, "2009": 1, "2010": 1, "2011": 1, "2012": 1, "2013": 1, "2014": 1}, "location": "YUMA SCHOOL DISTRICT 1"}]


  expect(wrapper.state().selectedCards).toEqual(newExpectedState)
})

it('should have a new list for the state to render after running a search',()=>{

const wrapper = mount(<App/>)
expect(wrapper.state().findAllMatches().length).toEqual(181)

expect(wrapper.state().findAllMatches("colorado").length).toEqual(2)
})




});
