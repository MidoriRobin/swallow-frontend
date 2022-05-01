import styled from '@emotion/styled';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const DashCont = styled.div`
  /* Layout */
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem 0 2rem;

  /* Presentation */

  /* sub-classes */

  .other-projects {
    display: flex;
    width: -webkit-fill-available;
    border: solid black 1px;
    margin: 1rem auto;
    justify-content: center;
  }
`;

const MainProject = styled.div`
  /* Layout */
  height: 20rem;
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  justify-content: flex-start;

  /* Presentation */
  padding-left: 1rem;
  border: solid black 1px;
  margin: 1rem auto;
`;

const TaskList = styled.div`
  /* Layout */
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* Presentation */
  border: solid black 1px;
  margin: 1rem auto;
  padding-left: auto 1rem;

  ul {
    list-style-type: none;
    list-style: none;
    padding: 0;
  }

  li {
    border: solid red 1px;
  }
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

  return (
    <DashCont className="dashboard-container">
      <h4>Dashboard</h4>
      <MainProject className="main-project">
        <h4>Name</h4>
        <p className="desc">Description</p>
        <p className="date">date created</p>
        <p className="tasks">Open tasks</p>
        <p className="requirements">Requirements met</p>
        <p className="curr-requirement">Current requirement</p>
      </MainProject>{' '}
      <TaskList className="task-list">
        <h4>Tasks</h4>
        <ul>
          <li>
            <h5>Task 1</h5>
            <p>Description</p> <p>Status</p>
          </li>
          <li>
            <h5>Task 1</h5>
            <p>Description</p> <p>Status</p>
          </li>
          <li>
            <h5>Task 1</h5>
            <p>Description</p> <p>Status</p>
          </li>
        </ul>
      </TaskList>{' '}
      {/* On click should list out a list of other projects, which lead to their project pages  */}
      <div className="other-projects">Other Projects</div>
    </DashCont>
  );
}
