import React from 'react';
import { shallow } from 'enzyme';
import EmailVerify from "../EmailVerify";


const component = shallow(<EmailVerify debug />);
describe('EmailVerify', () => {
    it('should render correctly in "debug" mode emailVerify', () => {
        expect(component).toMatchSnapshot();
    });
});