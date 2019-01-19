import React from 'react';
import { shallow } from 'enzyme';

import Register from "../Register";

const component = shallow(<Register debug />);
describe('Register', () => {
    it('should render correctly in "debug" mode', () => {      
        expect(component).toMatchSnapshot();
    });

    it('should render without throwing an error', () => {
        expect(true).toBe(true)
    })

    it('renders a email input', () => {
        expect(component.find('#userEmail').length).toEqual(1);
    })

    it('renders a password input', () => {
        expect(component.find('#userPassword').length).toEqual(1);
    })

});