import styled from '@emotion/styled';
import * as React from 'react';

const ProjectCont = styled.div`
  /* Layout */

  /* Presentation */
`;

export interface IProjectProps {
  projectId: string;
}

type project = {
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
};

type task = {
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
  expectedFinishDate: Date;
  completedDate: Date;
  timeTaken: Date;
  sprint: number;
};

export default function App(props: IProjectProps) {
  const [projectId, setProjectId] = React.useState<string>();
  const [project, setProject] = React.useState<project | {}>();

  React.useEffect(() => {}, [projectId]);

  function getProjectInfo(id: string) {
    // TODO: Can be moved and re-implemented with an interface?(for each reference to the project get endpoint)

    // Some api call fetching project info
    setProject({});
  }

  function getTaskInfo(id: string) {}

  function getUserInfo(id: string) {}

  return <ProjectCont className="project-container">Project</ProjectCont>;
}
