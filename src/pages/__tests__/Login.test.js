import React from 'react';
import { shallow, mount } from 'enzyme';

import Login from "../Login";

const component = shallow(<Login debug />);
describe('Login', () => {
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

describe('login useremail input', () => {
    it('should change event and set in state ', () => {
        const emailInput = component.find('#userEmail');
        emailInput.props().onChange({
            target: {
                name: 'email',
                value: 'akshansh.verma01@gamil.com'
            }
        });
        expect(component.state('email').toEqual('akshansh.verma01@gmail.com'));
    });
});