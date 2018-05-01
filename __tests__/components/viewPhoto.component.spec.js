import 'react-native';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ViewPhotos from "../../src/components/ViewPhotos";
import { ListView } from 'react-native';

configure({ adapter: new Adapter() });

const mockHandleSelectedPhoto = () => {};

const rowData = {
    node: {
        image: {}
    }
};

describe('Testing View Photos component', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <ViewPhotos
                onSelectedPhoto = {mockHandleSelectedPhoto}
                photoArray = {['photo1', 'photo2']}
            />
        );
        const render = wrapper.dive();
        wrapper.instance().renderRow(rowData);

        expect(wrapper).toMatchSnapshot();
    });
});
