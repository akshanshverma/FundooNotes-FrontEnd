import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '@material-ui/core/Button';

import Login from "../Login";

const component = shallow(<Login debug />);
describe('Login', () => {
    it('should render correctly in "debug" mode', () => {
        expect(component).toMatchSnapshot();
    });

    // it('renders a email input', () => {
    //     expect(component.find('#userEmail').length).toEqual(1);
    // })

    // it('renders a password input', () => {
    //     expect(component.find('#userPassword').length).toEqual(1);
    // })

    // it('should have register redirect option', () => {
    //     expect(component.find('span.reg').length).toEqual(1);
    // })

    // it('should have forget password redirect option', () => {
    //     expect(component.find('span.psw').length).toEqual(1);
    // })

    it('should change event and email set in state ', () => {
        const emailInput = component.find('#userEmail');
        emailInput.props().onChange({
            target: {
                name: 'email',
                value: 'akshansh.verma01@gamil.com'
            }
        });
        expect(component.state('email')).toEqual('akshansh.verma01@gamil.com');
    });


    it('should change event and password set in state ', () => {
        const emailInput = component.find('#userPassword');
        emailInput.props().onChange({
            target: {
                name: 'password',
                value: 'qwerty'
            }
        });
        expect(component.state('password')).toEqual('qwerty');
    });
});

describe('test button component which is use for login',()=>{
    it('should click for user login',()=>{
        const mockFun = jest.fn();
        const button = shallow(<Button children='ch' onClick={mockFun}/>);
        button.simulate('click');
        expect(mockFun.mock.calls.length).toEqual(1);
    });
});
