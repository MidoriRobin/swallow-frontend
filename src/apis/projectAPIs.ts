import { type } from 'os';
import { makeHTTPRequest } from '../utils/helper';
import { projectData1, projectList } from '../utils/testData';

export type project = {
  id?: string;
  name: string;
  type: string;
  description: string;
  //TODO: swap out for user name
  ownerId: string;
  createdDate: Date;
  requirements: string[];
  expectedEndDate: Date;
  //TODO: Swap out for user names
  MemberList: string[];
  groupId: string;
};

const isDevDebug = false;

const baseUrl = '';

const url = `${process.env.REACT_APP_MIDDLWARE_URL}/projects`;

function callProjectAPI() {}

async function getProjectData(projectId: string): Promise<project> {
  let project: project;

  // API call here
  if (isDevDebug) {
    project = { ...projectData1 };
    return project;
  }

  try {
    project = (await makeHTTPRequest(url, 'get')) as project;
  } catch (error) {
    console.log('Error encountered: ', error);
    // TODO: Define error
    throw error;
  }

  return project;
}

async function updateProject(updatedProject: project): Promise<project> {
  let returnedProject: project;

  try {
    // Api call

    returnedProject = (await makeHTTPRequest(
      url,
      'put',
      JSON.parse(JSON.stringify(updatedProject)),
    )) as project;

    if (returnedProject.id) {
      console.log('Project updated');
    } else {
      throw Error('Request Error');
    }
  } catch (error) {
    console.log('there was an error trying to perform the request');
    throw error;
  }

  return returnedProject;
}

async function createProject(newProject: project): Promise<project> {
  let createdProject: project;

  try {
    createdProject = (await makeHTTPRequest(
      url,
      'post',
      JSON.parse(JSON.stringify(newProject)),
    )) as project;
  } catch (error) {
    console.log('there was an error trying to perform the request');
    throw error;
  }
  return createdProject;
}

async function getAllProjects(id: string): Promise<project> {
  let projectList: project;

  try {
    projectList = (await makeHTTPRequest(`${url}/${id}`, 'get')) as project;
  } catch (error) {
    console.log('there was an error trying to perform the request');
    throw error;
  }

  return projectList;
}
