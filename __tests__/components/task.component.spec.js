import 'react-native';
import React from 'react';
import { shallow, configure } from 'enzyme';
import { Task } from '../../src/components/Task';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const taskDone = false;
const lowPriorityTask = {
    name: 'test_name',
    projectName: 'test_project',
    assignedTo: 'test_assignedTo',
    createDate: 'test_crateDate',
    priority: 'low',
    state: 'task_state',
    userImg: 'task_userImg'
};
const mediumPriorityTask = {
    name: 'test_name',
    projectName: 'test_project',
    assignedTo: 'test_assignedTo',
    createDate: 'test_crateDate',
    priority: 'medium',
    state: 'task_state',
    userImg: 'task_userImg'
};
const highPriorityTask = {
    name: 'test_name',
    projectName: 'test_project',
    assignedTo: 'test_assignedTo',
    createDate: 'test_crateDate',
    priority: 'high',
    state: 'task_state',
    userImg: 'task_userImg'
};

const setup = (task) => (
    shallow(
        <Task
            task = {task}
            taskDone = {taskDone}
        />
    )
);

describe('Testing Task component', () => {
    it('renders correctly - low priority', () => {
        const wrapper = setup(lowPriorityTask);
        expect(wrapper).toMatchSnapshot();
        wrapper.setProps({taskDone: true});
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly - medium priority', () => {
        const wrapper = setup(mediumPriorityTask);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly - high priority', () => {
        const wrapper = setup(highPriorityTask);
        expect(wrapper).toMatchSnapshot();
    });


});
