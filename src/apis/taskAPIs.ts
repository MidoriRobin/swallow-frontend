import { makeHTTPRequest } from '../utils/helper';

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

// TODO: should filtering be done on frontend or backend

type filterKeys = 'weight' | 'createdDate' | 'dueDate' | 'sprint' | 'status';

const url = `${process.env.REACT_APP_MIDDLWARE_URL}/tasks`;

async function getUserTasks(userId: string): Promise<task[]> {
  let taskList: task[];

  try {
    taskList = (await makeHTTPRequest(`${url}/${userId}`, 'get')) as task[];
  } catch (error) {
    console.log('Error occurred when trying to fetch user tasks');
    throw error;
  }

  return taskList;
}

async function getProjectTasks(projectId: string) {
  let taskList: task[];

  try {
    taskList = (await makeHTTPRequest(`${url}/${projectId}`, 'get')) as task[];
  } catch (error) {
    console.log('Error occurred when trying to fetch user tasks');
    throw error;
  }

  return taskList;
}

async function getTasksByType(
  projectId: string,
  filter?: { key: filterKeys; value: string },
) {
  let taskList: task[];

  try {
    taskList = (await makeHTTPRequest(`${url}/${projectId}`, 'get')) as task[];
  } catch (error) {
    console.log('Error occurred when trying to fetch user tasks');
    throw error;
  }

  return taskList;
}

function getTasksByStatus(projectId: string, status: string) {}
