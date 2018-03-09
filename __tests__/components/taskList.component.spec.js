import 'react-native';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SHOW_DONE} from '../../src/constans/ActionTypes';
import {TaskList} from '../../src/components/TaskList';

configure({ adapter: new Adapter() });

const testTasksEmptyArr = [{}];

const testTasksArr = [
    {
        name: 'test_name2',
        projectName: 'test_project2',
        assignedTo: 'test_assignedTo2',
        createDate: 'test_crateDate2',
        priority: 'task_priority2',
        state: 'task_state2',
        userImg: 'task_userImg2'
    },
    {
        name: 'test_name3',
        projectName: 'test_project3',
        assignedTo: 'test_assignedTo3',
        createDate: 'test_crateDate3',
        priority: 'task_priority3',
        state: SHOW_DONE,
        userImg: 'task_userImg3'
    }
];

const mockHandleOnPress = task => {};

const setup = () => (
    shallow(
        <TaskList
            tasks = {testTasksEmptyArr}
            onPress = {task => mockHandleOnPress(task)}
        />
    )
);

describe('Testing Task List component', () => {
    it('renders correctly', () => {
        const wrapper = setup();

        expect(wrapper).toMatchSnapshot();
        const modifiedTestTasksArr = testTasksEmptyArr.concat(testTasksArr);
        wrapper.setProps({tasks: modifiedTestTasksArr});
        expect(wrapper).toMatchSnapshot();
    });
    it('events invoke correctly', () => {
        const wrapper = setup();

        const render = wrapper.dive();
        render.find('Link').forEach(child => {
            child.simulate('press');
        })
    })
});
