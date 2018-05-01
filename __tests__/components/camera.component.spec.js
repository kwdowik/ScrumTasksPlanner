import 'react-native';
import React from 'react';
import { shallow, configure } from 'enzyme';
import { CameraRoll } from 'react-native';
import Adapter from 'enzyme-adapter-react-16';
import Camera from "../../src/components/Camera";

configure({ adapter: new Adapter() });

const mockHandleSelectedPhoto = uri => {};

const props = {
    selectedPhoto: mockHandleSelectedPhoto,
    title: 'test_title',
    buttonStyle: {backgroundColor: '#68c2ee'}
};

const setup = () => (
    shallow(<Camera {...props} />
    )
);

describe('Testing Camera component', () => {
    it('renders correctly - showPhotoGallery: true', () => {
        const wrapper = setup();
        wrapper.setState({showPhotoGallery: true});

        const render = wrapper.dive();
        render.find('ViewPhotos').forEach(child => {
            child.simulate('SelectedPhoto');
        });

        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly - showPhotoGallery: false', () => {
        const wrapper = setup();
        const render = wrapper.dive();

        // render.find('Button').last().simulate('press');

    })
});
