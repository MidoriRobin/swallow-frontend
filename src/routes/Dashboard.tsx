import styled from '@emotion/styled';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const DashCont = styled.div`
  /* Layout */

  /* Presentation */
`;

export interface IDashboardProps {}

type projectDetailed = {
  name: string;
  description: string;
  dateCreated: Date;
  dateToComplete: Date;
  openTasks: number;
  tasksAssigned: number;
  requirementsMet: number;
  reqOutstanding: number;
  currentRequirement: string;
};

type projectSimple = {
  name: string;
  description: string;
  openTasks: number;
  tasksAssigned: number;
};

type task = {
  name: string;
  description: string;
  toComplete: Date;
};

/**
 * Introductory screen which presents the user with their current focused project, and a list of current tasks that are assigned to them.
 * Data required: Basic user data(Username, id), Main project data(Simple project data + Icon, Number current tasks, Date started, date to be completed),
 * Simple project data(Name, status, description), Tasks data (Name, project, description, deadline)
 * @param props
 * @returns
 */
export default function Dashboard(props: IDashboardProps) {
  const [mainProject, setMainProject] = React.useState<projectDetailed | {}>(
    {},
  );
  const [projectList, setProjectList] = React.useState<projectSimple | {}>({});
  const [taskList, setTaskList] = React.useState<task | {}>({});

  let navigate = useNavigate();

  /**
   * Fetches a list of the current tasks that are active and assigned to the user
   *
   */
  function getTasks() {}

  /**
   * Fetches a list of the current projects that the user is a memeber of
   *
   */
  function getProjectList() {}

  /**
   * Fetches the project that the user is a member of which is flagged as main
   */
  function getMainProject() {}

  /**
   * Fetches simple user data
   *
   */
  function getBasicUserData() {}

  return <DashCont>Dashboard</DashCont>;
}
