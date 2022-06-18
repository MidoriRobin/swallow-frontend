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

function getProjectTasks(projectId: string) {}

function getUserTasks(userId: string) {}

function getTasksByType(projectId: string, sort: string) {}

function getTasksByStatus(projectId: string, status: string) {}
