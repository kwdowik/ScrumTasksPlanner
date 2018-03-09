import 'react-native';
import React from 'react';
import { shallow, configure } from 'enzyme';
import { TaskDetails } from '../../src/components/TaskDetails';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter()});

const mockHandleDelete = task => {};
const mockHandleEdit = (name, value) => {};
const mockHandleSave = task => {};
const task = {
    _id: '12312312',
    name: 'test_name',
    projectName: 'test_project',
    assignedTo: 'test_assignedTo',
    createDate: 'test_crateDate',
    priority: 'task_priority',
    state: 'task_state',
    userImg: 'task_userImg'
};
const projectsArr = [
    {
        projectName: 'projectName2'
    },
    {
        projectName: 'projectName2'
    },
    {
        projectName: 'projectName3'
    },
    {
        projectName: 'projectName1'
    }
];

const setup = () => (
    shallow(
        <TaskDetails
            onEdit = {(value,name) => mockHandleEdit(name, value)}
            projects = {projectsArr}
            onSave = {task => mockHandleSave(task)}
            onDelete = {task => mockHandleDelete(task)}
            editable = {false}
            task = {task}
        />
    )
);


describe('Testing Task component', () => {

    it('renders correctly', () => {
        const wrapper = setup();
        expect(wrapper).toMatchSnapshot();
        wrapper.setProps({editable: true});
        expect(wrapper).toMatchSnapshot();
    });

    it('events invoke correctly', () => {
        const wrapper = setup();

        const render = wrapper.dive();
        render.find('FormInput').forEach(child => {
            child.simulate('changeText')
        });
        render.find('Dropdown').forEach(child => {
            child.simulate('changeText')
        });

        render.find('Button').forEach(child => {
            child.simulate('press')
        });

    });
});

