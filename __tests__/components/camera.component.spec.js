import 'react-native';
import React from 'react';
import { shallow, configure } from 'enzyme';
import { CameraRoll } from 'react-native';
import Adapter from 'enzyme-adapter-react-16';
import Camera from "../../src/components/Camera";

configure({ adapter: new Adapter() });

const mockHandleSelectedPhoto = () => {};

const props = {
    selectedPhoto: mockHandleSelectedPhoto,
    title: 'test_title',
    buttonStyle: {backgroundColor: '#68c2ee'}
};

// jest.mock('CameraRoll', () => {
//     return {
//         getPhotos: jest.fn(),
//     };
// });

describe('Testing Camera component', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <Camera {...props} />
        );
        const render = wrapper.dive();
        render.find('ViewPhotos').forEach(child => {
            child.simulate('selectedPhoto');
        });
        expect(wrapper).toMatchSnapshot();
    });
});
