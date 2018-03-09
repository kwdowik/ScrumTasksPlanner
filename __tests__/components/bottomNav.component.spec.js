import 'react-native';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BottomNav} from "../../src/components/BottomNav";

configure({ adapter: new Adapter() });


const mockHandleTaskTypeChanged = () => {};

const props = {
    onTaskTypeChanged: mockHandleTaskTypeChanged,
    tabIndex: 0,
    styles: {
        elevation: 8,
        position: 'absolute',
        left: 0, bottom: 0, right: 0
    }
};

describe('Testing BottomNav component', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <BottomNav {...props} />
        );
        expect(wrapper).toMatchSnapshot();
        wrapper.setProps({tabIndex: 1});
        expect(wrapper).toMatchSnapshot();
        wrapper.setProps({tabIndex: 2});
        expect(wrapper).toMatchSnapshot();

    });
});
