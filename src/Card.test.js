import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount } from 'enzyme';
import kinderData from '../data/kindergartners_in_full_day_program.js'
import DistrictRepository from  './helper.js'


describe('Card', () => {
    const configData = new DistrictRepository(kinderData)
    const wrapper = shallow(<Card
      active={"2px"}
      key={0}
      index={1}
      location= {"devner"}
      info={DistrictRepository} />)

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card
      active={"2px"}
      key={0}
      index={1}
      location= {"devner"}
      info={DistrictRepository} />, div);
  });

  it('has a class',()=>{
    expect(wrapper.is('.card')).toEqual(true);

  })

  it('can be clicked',()=>{
    const spy = jest.fn();
    const wrapper = shallow(<Card
      active={"2px"}
      key={0}
      index={1}
      location= {"devner"}
      info={DistrictRepository}
      />)

      console.log(wrapper.node.props)

      // wrapper.find('.card').simulate('click');

        // expect(spy).toBeCalled();

  })



});
