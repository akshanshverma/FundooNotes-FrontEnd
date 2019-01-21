import React from 'react';
import { shallow,mount } from 'enzyme';
import DashBoard from "../DashBoard";


const component = mount(<DashBoard history={[]} debug />);
describe('DashBoard', () => {
    it('should render correctly in "debug" mode DashBoard', () => {
        expect(component).toMatchSnapshot();
    });
});