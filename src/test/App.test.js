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

it('has a class',()=>{
  const wrapper = shallow(<App/>)
  expect(wrapper.is('.main-container')).toEqual(true);
})

it('has a class',()=>{
  const wrapper = shallow(<App/>)
  console.log(wrapper)
})


});
