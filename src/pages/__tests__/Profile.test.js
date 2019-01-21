import React from 'react';
import { shallow } from 'enzyme';
import Profile from "../Profile";


const component = shallow(<Profile history={[]} debug />);
describe('Profile', () => {
    it('should render correctly in "debug" mode Profile', () => {
        expect(component).toMatchSnapshot();
    });
});