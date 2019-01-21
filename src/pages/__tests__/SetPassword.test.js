import React from 'react';
import { shallow } from 'enzyme';
import SetPassword from "../SetPassword";


const component = shallow(<SetPassword debug />);
describe('SetPassword', () => {
    it('should render correctly in "debug" mode SetPassword', () => {
        expect(component).toMatchSnapshot();
    });


    it('should change event and password set in state for reset', () => {
        const emailInput = component.find('#resetPassword');
        emailInput.props().onChange({
            target: {
                name: 'password',
                value: 'qwerty'
            }
        });
        expect(component.state('password')).toEqual('qwerty');
    });


    it('should change event and rpassword in state to check confirm password', () => {
        const emailInput = component.find('#resetRPassword');
        emailInput.props().onChange({
            target: {
                name: 'rpassword',
                value: 'qwerty'
            }
        });
        expect(component.state('rpassword')).toEqual('qwerty');
    });
});