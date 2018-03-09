import 'react-native';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ViewPhotos from "../../src/components/ViewPhotos";

configure({ adapter: new Adapter() });

const mockHandleSelectedPhoto = () => {};


describe('Testing Camera component', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <ViewPhotos
                selectedPhoto = {mockHandleSelectedPhoto}
                photoArray = {['photo1', 'photo2']}
            />
        );
        const render = wrapper.dive();
        render.find('TouchableHighlight').forEach(child => {
            child.simulate('press');
        });
        expect(wrapper).toMatchSnapshot();
    });
});
