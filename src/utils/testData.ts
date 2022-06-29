import { project } from '../apis/projectAPIs';
import { task } from '../apis/taskAPIs';

// TODO: extract functionality to relevant api calls, use interfaces to filter the necessary information
// export type project = {
//   id: string;
//   name: string;
//   type: string;
//   description: string;
//   ownerId: string;
//   createdDate: Date;
//   requirements: string[];
//   expectedEndDate: Date;
//   MemberList: string[];
//   groupId: string;
// };

export const projectData1: project = {
  id: '1',
  name: 'My first project',
  type: 'Software Development',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  ownerId: 'Christopher Robinson',
  createdDate: new Date('November 26, 2021'),
  requirements: [
    'Complete frontend',
    'Complete Backend',
    'Setup pipeline',
    'Setup database',
    'Setup project on AWS',
  ],
  expectedEndDate: new Date('November 26, 2022'),
  MemberList: ['Jeff', 'Greg', 'Stevie'],
  groupId: 'Sqwaad',
};

const projectData2: project = {
  id: '2',
  name: 'My Second project',
  type: 'Software Development',
  description: 'Develop nice software',
  ownerId: 'Christopher Robinson',
  createdDate: new Date(),
  requirements: ['Requirement 1', 'Requirement 2', 'Requirement 3'],
  expectedEndDate: new Date(),
  MemberList: ['Jeff', 'Greg', 'Stevie'],
  groupId: 'Sqwaad',
};

const projectData3: project = {
  id: '3',
  name: 'My third project',
  type: 'Software Development',
  description: 'Develop nice software',
  ownerId: 'Christopher Robinson',
  createdDate: new Date(),
  requirements: ['Requirement 1', 'Requirement 2', 'Requirement 3'],
  expectedEndDate: new Date(),
  MemberList: ['Jeff', 'Greg', 'Stevie'],
  groupId: 'Sqwaad',
};

const projectData4: project = {
  id: '4',
  name: 'My Fourth project',
  type: 'Software Development',
  description: 'Develop nice 4 software',
  ownerId: 'Christopher Robinson',
  createdDate: new Date(),
  requirements: ['Requirement 1', 'Requirement 2', 'Requirement 3'],
  expectedEndDate: new Date(),
  MemberList: ['Jeff', 'Greg', 'Stevie'],
  groupId: 'Sqwaad',
};

const projectData5: project = {
  id: '5',
  name: 'My Fifth project',
  type: 'Software Development',
  description: 'Develop 5 software',
  ownerId: 'Christopher Robinson',
  createdDate: new Date(),
  requirements: ['Requirement 1', 'Requirement 2', 'Requirement 3'],
  expectedEndDate: new Date(),
  MemberList: ['Jeff', 'Greg', 'Stevie'],
  groupId: 'Sqwaad',
};

export const projectList: project[] = [
  projectData1,
  projectData2,
  projectData3,
  projectData4,
  projectData5,
];

export const taskData1: Readonly<task> = {
  id: '1',
  name: 'Task 1',
  type: 'Task',
  description: 'Complete this task',
  creatorId: '1',
  assignedId: '1',
  projectId: '1',
  weight: 1,
  createdDate: new Date(),
  dueDate: new Date(),
  completedDate: new Date(),
  timeTaken: 10,
  sprint: 2,
  status: 'to-do',
};

const taskData2: Readonly<task> = {
  id: '2',
  name: 'Task 2',
  type: 'Task',
  description: 'Complete this task',
  creatorId: '1',
  assignedId: '1',
  projectId: '1',
  weight: 1,
  createdDate: new Date(),
  dueDate: new Date(),
  completedDate: new Date(),
  timeTaken: 10,
  sprint: 2,
  status: 'to-do',
};

const taskData3: Readonly<task> = {
  id: '3',
  name: 'Task 3',
  type: 'Task',
  description: 'Complete this task',
  creatorId: '1',
  assignedId: '1',
  projectId: '1',
  weight: 1,
  createdDate: new Date(),
  dueDate: new Date(),
  completedDate: new Date(),
  timeTaken: 10,
  sprint: 2,
  status: 'to-do',
};

const taskData4: Readonly<task> = {
  id: '4',
  name: 'Task 3 - in prog',
  type: 'Task',
  description: 'Complete this task',
  creatorId: '1',
  assignedId: '1',
  projectId: '1',
  weight: 1,
  createdDate: new Date(),
  dueDate: new Date(),
  completedDate: new Date(),
  timeTaken: 10,
  sprint: 2,
  status: 'in-progress',
};

const taskData5: Readonly<task> = {
  id: '5',
  name: 'Task 3 in prog',
  type: 'Task',
  description: 'Complete this task',
  creatorId: '1',
  assignedId: '1',
  projectId: '1',
  weight: 1,
  createdDate: new Date(),
  dueDate: new Date(),
  completedDate: new Date(),
  timeTaken: 10,
  sprint: 2,
  status: 'in-progress',
};

const taskData6: Readonly<task> = {
  id: '6',
  name: 'Task 6 done',
  type: 'Task',
  description: 'Complete this task',
  creatorId: '1',
  assignedId: '1',
  projectId: '1',
  weight: 1,
  createdDate: new Date(),
  dueDate: new Date(),
  completedDate: new Date(),
  timeTaken: 10,
  sprint: 2,
  status: 'done',
};

const taskData7: Readonly<task> = {
  id: '7',
  name: 'Task 7 done',
  type: 'Task',
  description: 'Complete this task',
  creatorId: '1',
  assignedId: '1',
  projectId: '1',
  weight: 1,
  createdDate: new Date(),
  dueDate: new Date(),
  completedDate: new Date(),
  timeTaken: 10,
  sprint: 2,
  status: 'done',
};

const taskData8: Readonly<task> = {
  id: '8',
  name: 'Task 8 done',
  type: 'Task',
  description: 'Complete this task',
  creatorId: '1',
  assignedId: '1',
  projectId: '1',
  weight: 1,
  createdDate: new Date(),
  dueDate: new Date(),
  completedDate: new Date(),
  timeTaken: 10,
  sprint: 2,
  status: 'done',
};

export const taskListTest: task[] = [
  taskData1,
  taskData2,
  taskData3,
  taskData4,
  taskData5,
  taskData6,
  taskData7,
  taskData8,
];

// TODO: add project and tasks test data for project component
