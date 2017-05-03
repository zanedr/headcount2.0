import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount } from 'enzyme';


describe('Card', () => {

  it('renders without crashing', () => {
    console.log(<Card/>)

    const wrapper = shallow(<Card />);

    // expect(wrapper.contains(title)).toEqual(true);
  });

});
