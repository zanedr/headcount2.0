import React from 'react';
import ReactDOM from 'react-dom';
import OptionsList from '../Components/OptionsList';
import { shallow, mount } from 'enzyme';


describe('OptionsList',()=>{

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OptionsList/>, div);
  });

  it('should contain option elements',()=>{
    const wrapper = mount(<OptionsList />)
    expect(wrapper.find('option').length).toEqual(12)
  })

  it("should activate a onChange if a new option is selected",()=>{
    const spy = jest.fn();

    const wrapper = mount(<OptionsList selectDataSource={spy}/>)

    wrapper.find('option').first().simulate('change',{target: { value : 'Average reading scores'}})
    expect(spy).toBeCalled();

  })


})
