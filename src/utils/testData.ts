type project = {
  id: string;
  name: string;
  type: string;
  description: string;
  ownerName: string;
  createdDate: Date;
  requirements: number;
  expectedEndDate: Date;
  MemberList: string[];
  groupName: string;
};

export const projectData1: project = {
  id: '1',
  name: 'My first project',
  type: 'Software Development',
  description: 'Develop nice software',
  ownerName: 'Christopher Robinson',
  createdDate: new Date(),
  requirements: 5,
  expectedEndDate: new Date(),
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
  requirements: 5,
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
  requirements: 5,
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
  requirements: 5,
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
  requirements: 5,
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

// TODO: add project and tasks test data for project component
