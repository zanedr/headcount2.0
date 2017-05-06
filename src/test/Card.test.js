import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Components/Card';
import { shallow, mount } from 'enzyme';
import kinderData from '../../data/kindergartners_in_full_day_program.js'
import DistrictRepository from  '../helper.js'


describe('Card', () => {
    const configData = new DistrictRepository(kinderData)

    const wrapper = shallow(<Card  active={"blue"}
      key={0}
      index={1}
      location= {"denver"}
      info={DistrictRepository}
    />)
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card
      active={"2px"}
      key={0}
      index={1}
      location= {"denver"}
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
      handleSelectCard={spy}
      location= {"denver"}
      info={DistrictRepository}
      />)

        wrapper.simulate('click')

        expect(spy).toBeCalled();
  })

  it('should have default props',()=>{
    expect(wrapper.unrendered.type.defaultProp.info).toEqual({
      '2004': 0.39196,
      '2005': 0,
      '2006': 0,
      '2007': 0,
      '2008': 0.19264,
      '2009': 0.19,
      '2010': 0.19744,
      '2011': 0.203,
      '2012': 0.18691,
      '2013': 0,
      '2014': 0.12982 })

    expect(wrapper.unrendered.type.defaultProp.location).toEqual("Denver")
  })

  it('should be able to take props and utilize them',()=>{
    const wrapper =  mount(<Card  active={"2px"}
      key={0}
      index={1}
      location= {"Yuma"}
      info={DistrictRepository}
    />)

    expect(wrapper.props()).toEqual({ active: '2px',
      index: 1,
      location: 'Yuma',
      info: DistrictRepository })


  })


});
