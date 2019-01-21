import React from 'react';
import { shallow } from 'enzyme';

import Register from "../Register";

const component = shallow(<Register debug />);
describe('Register', () => {
    it('should render correctly in "debug" mode', () => {      
        expect(component).toMatchSnapshot();
    });

    // it('renders a email input', () => {
    //     expect(component.find('#rUsername').length).toEqual(1);
    // })

    // it('renders a password input', () => {
    //     expect(component.find('#rEmail').length).toEqual(1);
    // })
    // it('renders a password input', () => {
    //     expect(component.find('#rPassword').length).toEqual(1);
    // })
    // it('renders a check password input', () => {
    //     expect(component.find('#rRPassword').length).toEqual(1);
    // })

    it('should change event and password set in state ', () => {
        const emailInput = component.find('#rUsername');
        emailInput.props().onChange({
            target: {
                name: 'username',
                value: 'akshansh'
            }
        });
        expect(component.state('username')).toEqual('akshansh');
    });
    it('should change event and password set in state ', () => {
        const emailInput = component.find('#rEmail');
        emailInput.props().onChange({
            target: {
                name: 'email',
                value: 'akshansh.verma@gmail.com'
            }
        });
        expect(component.state('email')).toEqual('akshansh.verma@gmail.com');
    });
    it('should change event and password set in state ', () => {
        const emailInput = component.find('#rPassword');
        emailInput.props().onChange({
            target: {
                name: 'password',
                value: 'qwerty'
            }
        });
        expect(component.state('password')).toEqual('qwerty');
    });
    it('should change event and password set in state ', () => {
        const emailInput = component.find('#rRPassword');
        emailInput.props().onChange({
            target: {
                name: 'rpassword',
                value: 'qwerty'
            }
        });
        expect(component.state('rpassword')).toEqual('qwerty');
    });
});