import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import BarSkill from '../../../src/pages/common/BarSkill';

const wrapper = shallow(<BarSkill />)
describe('BarSkill Component', () => {
  it('contains a div', () => {
    expect(wrapper.contains(<div></div>));
  })
})
