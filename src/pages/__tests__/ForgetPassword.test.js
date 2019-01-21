import React from 'react';
import { shallow } from 'enzyme';

import ForgetPassword from "../ForgetPassword";


const component = shallow(<ForgetPassword debug />);

describe('forgetPassword',()=>{
    it('should render correctly in "debug" mode', () => {      
        expect(component).toMatchSnapshot();
    });
    // it('renders a email input', () => {
    //     expect(component.find('#emailForPasswordReset').length).toEqual(1);
    // });

    it('should change event and email set in state to send reset password link', () => {
        const emailInput = component.find('#emailForPasswordReset');
        emailInput.props().onChange({
            target: {
                name: 'email',
                value: 'akshansh.verma01@gmail.com'
            }
        });
        expect(component.state('email')).toEqual('akshansh.verma01@gmail.com');
    });
});