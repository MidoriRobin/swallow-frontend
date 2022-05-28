// TODO: extract functionality to relevant api calls, use interfaces to filter the necessary information
export type project = {
  id: string;
  name: string;
  type: string;
  description: string;
  ownerName: string;
  createdDate: Date;
  requirements: string[];
  expectedEndDate: Date;
  MemberList: string[];
  groupName: string;
};

export type task = {
  id: string;
  name: string;
  type: string;
  description: string;
  //TODO: swap out for user name
  creatorId: string;
  //TODO: swap out for user name
  assignedId: string;
  //TODO: might not need this
  projectId: string;
  weight: number;
  createdDate: Date;
  dueDate: Date;
  completedDate: Date;
  timeTaken: number;
  sprint: number;
  status: string;
};

export const projectData1: project = {
  id: '1',
  name: 'My first project',
  type: 'Software Development',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  ownerName: 'Christopher Robinson',
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
  groupName: 'Sqwaad',
};

const projectData2: project = {
  id: '2',
  name: 'My Second project',
  type: 'Software Development',
  description: 'Develop nice software',
  ownerName: 'Christopher Robinson',
  createdDate: new Date(),
  requirements: ['Requirement 1', 'Requirement 2', 'Requirement 3'],
  expectedEndDate: new Date(),
  MemberList: ['Jeff', 'Greg', 'Stevie'],
  groupName: 'Sqwaad',
};

const projectData3: project = {
  id: '3',
  name: 'My third project',
  type: 'Software Development',
  description: 'Develop nice software',
  ownerName: 'Christopher Robinson',
  createdDate: new Date(),
  requirements: ['Requirement 1', 'Requirement 2', 'Requirement 3'],
  expectedEndDate: new Date(),
  MemberList: ['Jeff', 'Greg', 'Stevie'],
  groupName: 'Sqwaad',
};

const projectData4: project = {
  id: '4',
  name: 'My Fourth project',
  type: 'Software Development',
  description: 'Develop nice 4 software',
  ownerName: 'Christopher Robinson',
  createdDate: new Date(),
  requirements: ['Requirement 1', 'Requirement 2', 'Requirement 3'],
  expectedEndDate: new Date(),
  MemberList: ['Jeff', 'Greg', 'Stevie'],
  groupName: 'Sqwaad',
};

const projectData5: project = {
  id: '5',
  name: 'My Fifth project',
  type: 'Software Development',
  description: 'Develop 5 software',
  ownerName: 'Christopher Robinson',
  createdDate: new Date(),
  requirements: ['Requirement 1', 'Requirement 2', 'Requirement 3'],
  expectedEndDate: new Date(),
  MemberList: ['Jeff', 'Greg', 'Stevie'],
  groupName: 'Sqwaad',
};

export const projectList: project[] = [
  projectData1,
  projectData2,
  projectData3,
  projectData4,
  projectData5,
];

export const taskData1: task = {
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

const taskData2: task = {
  id: '1',
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

const taskData3: task = {
  id: '1',
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

export const taskList: task[] = [taskData1, taskData2, taskData3];

// TODO: add project and tasks test data for project component
