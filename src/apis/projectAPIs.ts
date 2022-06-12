interface IProject {
  id?: string;
  name: string;
  type: string;
  description: string;
  //TODO: swap out for user name
  ownerId: string;
  createdDate: Date;
  requirements: string;
  expectedEndDate: Date;
  //TODO: Swap out for user names
  MemberList: string[];
  GroupId: string;
}

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

function callProjectAPI() {}

function getProjectData(projectId: string): IProject {
  let project: IProject;

  // API call here
  if (true) {
    project = {
      name: 'string',
      type: 'string',
      description: 'string',
      ownerId: 'string',
      createdDate: new Date(),
      requirements: 'string',
      expectedEndDate: new Date(),
      MemberList: ['', ''],
      GroupId: 'string',
    };
  }

  return project;
}

function updateProject(updatedProject: IProject): void {
  try {
    // Api call
    if (updatedProject.id) {
      console.log('Project updated');
    } else {
      throw Error('Request Error');
    }
  } catch (error) {
    console.log('there was an error trying to perform the request');
  }
}

function createProject(newProject: IProject): string {
  let createdProjectId = '-1';

  try {
    if (newProject.name !== 'string') {
      console.log('Project created');
      createdProjectId = '2';
    } else {
      throw Error('Request Error');
    }
  } catch (error) {
    console.log('there was an error trying to perform the request');
  }
  return createdProjectId;
}
