import React from 'react';
import { shallow ,mount} from 'enzyme';

import Login from "../Login";


describe('Login', () => {
    it('should render correctly in "debug" mode', () => {    
        const component = shallow(<Login debug />);
        expect(component).toMatchSnapshot();
    });
});

describe('Login', () => {
    it('should print error msg', () => {    
        const component = shallow(<Login />);
        const button =component.find('#loginButton');
        button.simulate('click');
        const text = component.find('div.errMsg').text();
        expect(text).toEqual('invalid email or password');
    });
});