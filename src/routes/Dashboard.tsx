import styled from '@emotion/styled';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { breakpoints } from '../utils/helper';
import { frontendUrls } from '../utils/urls';

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

  @media (min-width: ${breakpoints.lrg}px) {
    display: grid;
    padding: 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3rem auto 10rem;
    grid-column-gap: 5rem;
    grid-row-gap: 1rem;

    .other-projects {
      width: 20rem;
      grid-row: 3 / 4;
      grid-column: 1 / 2;
    }
  }

  p > span {
    font-weight: 700;
  }
`;

const MainProject = styled.div`
  /* Layout */
  height: 25rem;
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  justify-content: flex-start;

  /* Presentation */
  padding: 0 1rem;
  border: solid black 1px;
  margin: 1rem auto;

  @media (min-width: ${breakpoints.lrg}px) {
    /* width: 20rem; */
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }

  .name {
    font-size: 1.2rem;
    margin: 0;
    margin: 1rem 0;
  }

  .desc {
    font-style: italic;
  }
  .date {
    font-size: 0.8rem;
  }
  .tasks {
  }
  .requirements {
  }
  .requirement {
  }
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

  ul {
    list-style-type: none;
    list-style: none;
    padding: 0;
  }

  li {
    border: solid red 1px;
  }

  @media (min-width: ${breakpoints.lrg}px) {
    /* width: 20rem; */
    height: 25rem;
    overflow: scroll;

    grid-row: 2 / 3;
    grid-column: 2 / 3;
    justify-content: normal;

    ul {
      overflow: scroll;
      margin: 0;
    }
  }

  h4 {
    margin: 0;
    padding: 1rem 0;
    box-shadow: 1px 5px 9px -1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 1px 5px 9px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 5px 9px -1px rgba(0, 0, 0, 0.75);
  }
`;

export interface IDashboardProps {}

type projectDetailed = {
  id: string;
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
  id: string;
  name: string;
  description: string;
  openTasks: number;
  tasksAssigned: number;
};

type task = {
  id: string;
  name: string;
  description: string;
  dueDate: Date;
  status: string;
};

/**
 * Introductory screen which presents the user with their current focused project, and a list of current tasks that are assigned to them.
 * Data required: Basic user data(Username, id), Main project data(Simple project data + Icon, Number current tasks, Date started, date to be completed),
 * Simple project data(Name, status, description), Tasks data (Name, project, description, deadline)
 * @param props
 * @returns
 */
export default function Dashboard(props: IDashboardProps) {
  const [mainProject, setMainProject] = React.useState<projectDetailed | null>(
    null,
  );

  const [projectList, setProjectList] = React.useState<projectSimple | null>(
    null,
  );
  const [taskList, setTaskList] = React.useState<task[]>();

  let navigate = useNavigate();

  React.useEffect(() => {
    getTasks();
    getMainProject();
    getBasicUserData();
  }, []);

  /**
   * Fetches a list of the current tasks that are active and assigned to the user
   *
   */
  function getTasks() {
    const tasks: task[] = [
      {
        id: '1',
        name: 'Create page',
        description: 'Create the first page',
        dueDate: new Date(),
        status: 'To Do',
      },
      {
        id: '2',
        name: 'Scaffold Project',
        description: 'Create project files',
        dueDate: new Date(),
        status: 'In progress',
      },
      {
        id: '3',
        name: 'Make first commit',
        description: 'Initialize repository',
        dueDate: new Date(),
        status: 'Done',
      },
      {
        id: '4',
        name: 'Assemble the avengers',
        description: 'Call team to action',
        dueDate: new Date(),
        status: 'To Do',
      },
    ];

    setTaskList(tasks);
  }

  /**
   * Fetches a list of the current projects that the user is a memeber of
   *
   */
  function getProjectList() {}

  /**
   * Fetches the project that the user is a member of which is flagged as main
   */
  function getMainProject() {
    const projectInfo: projectDetailed = {
      id: '1',
      name: 'Swallow',
      description: 'A bug tracking application',
      dateCreated: new Date(),
      dateToComplete: new Date(),
      openTasks: 12,
      tasksAssigned: 5,
      requirementsMet: 4,
      reqOutstanding: 5,
      currentRequirement: 'Develop frontend',
    };

    setMainProject(projectInfo);
  }

  /**
   * Fetches simple user data
   *
   */
  function getBasicUserData() {}

  return (
    <DashCont className="dashboard-container">
      <h4>Dashboard</h4>
      <MainProject className="main-project">
        {mainProject ? (
          <>
            <h5 className="name">
              <span>Name:</span> {mainProject.name}
            </h5>
            <p className="desc">
              <span>Description:</span> {mainProject.description}
            </p>
            <p className="date">
              <span>Start Date:</span> {mainProject.dateCreated.toDateString()}
            </p>
            <p className="tasks">
              <span>Open Tasks:</span> {mainProject.openTasks}
            </p>
            <p className="requirements">
              <span>Requirements Met:</span> {mainProject.requirementsMet}
            </p>
            <p className="curr-requirement">
              <span>Current Requirement:</span> {mainProject.currentRequirement}
            </p>
            <button
              type="button"
              onClick={() =>
                navigate(`${frontendUrls.projects}/${mainProject.id}`)
              }
            >
              Go to Project page
            </button>
          </>
        ) : (
          <p>Loading</p>
        )}
      </MainProject>{' '}
      <TaskList className="task-list">
        <h4>Tasks</h4>
        <ul>
          {taskList?.map((task) => (
            <li key={task.id}>
              <p>
                <span>Name: </span>
                {task.name}
              </p>
              <p>
                <span>Description: </span>
                {task.description}
              </p>
              <p>
                <span>Status: </span>
                {task.status}
              </p>
              <button
                onClick={() => navigate(`${frontendUrls.task}/${task.id}`)}
              >
                Open Task
              </button>
            </li>
          ))}
        </ul>
      </TaskList>{' '}
      {/* On click should list out a list of other projects, which lead to their project pages  */}
      <div className="other-projects">Other Projects</div>
    </DashCont>
  );
}
