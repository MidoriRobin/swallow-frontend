import styled from '@emotion/styled';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/card/Card';
import { TaskList } from '../components/tasklist';
import useMediaQuery from '../hooks/useMediaQuery';
import { breakpoints } from '../utils/helper';
import { project, projectData1, task, taskListTest } from '../utils/testData';

const ProjectCont = styled.div`
  /* TODO: Similar to dashboard container extract? */
  /* Layout */
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  margin-top: 1rem;

  /* Presentation */
  /* border: solid black 1px; */

  @media (min-width: ${breakpoints.lrg}px) {
  }
`;

const ProjectHead = styled.div`
  /* Layout */
  padding: 0 1rem;

  /* Presentation */
  /* border: solid red 1px; */
  h4 {
    text-align: center;
  }
`;

const ProjectInfo = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: -webkit-fill-available;
  margin: 2rem 0;
  /* Presentation */
  /* border: solid red 1px; */
  border-radius: 6px;

  div {
    margin: 1rem 0;
  }

  p {
    font-size: 0.9rem;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.9rem;
  }

  p.created-by {
    font-size: 0.8rem;
    font-weight: 500;

    span {
      font-weight: 700;
    }
  }

  .tasks {
    width: -webkit-fill-available;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  @media (min-width: ${breakpoints.lrg}px) {
    display: grid;

    grid-template-columns: auto auto auto auto auto;
    grid-template-rows: auto auto auto;

    align-content: center;

    grid-template-areas:
      'mainInfo mainInfo mainInfo mainInfo mainInfo'
      'timeInfo timeInfo timeInfo timeInfo timeInfo'
      'tasksInfo tasksInfo tasksInfo tasksInfo tasksInfo';

    .main-info {
      grid-area: mainInfo;
    }

    .time-info {
      grid-area: timeInfo;
    }

    .tasks-info {
      grid-area: tasksInfo;
    }

    section {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
  }
`;

export interface IProjectProps {
  projectId: string;
}

export default function Project() {
  const [projectId, setProjectId] = React.useState<string>();
  const [project, setProject] = React.useState<project>();
  const [tasks, setTasks] = React.useState<task[]>();
  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.lrg}px)`);

  let { id } = useParams();

  React.useEffect(() => {
    setProjectId(id);

    if (projectId) {
      getProjectInfo(projectId);
      getTaskInfo(projectId);
    }
  }, [projectId]);

  function getProjectInfo(id: string) {
    // TODO: Can be moved and re-implemented with an interface?(for each reference to the project get endpoint)
    // Some api call fetching project info

    setProject(projectData1);

    console.log(project);
    // setProject({name: "My First Project"});
  }

  function getTaskInfo(id: string) {
    // should lazy load tasks based on scroll, only open tasks!
    setTasks(taskListTest);
  }

  console.log('Media query in swallow:', isDesktop);

  return (
    <ProjectCont className="project-container">
      <ProjectHead className="project-head">
        <img src="https://picsum.photos/200/200" />
        <h4 className="project-name">Project Name</h4>
        {/* TODO: add a small description that disappears with larger breakpoints */}
      </ProjectHead>
      <ProjectInfo className="project-info">
        <section className="main-info">
          <Card width={isDesktop ? '40rem' : ''} height="20rem">
            <div className="description">
              {project?.description === ''
                ? 'No description provided'
                : project?.description}
            </div>
            <p className="created-by">
              <span>Creator:</span> {project?.ownerName}
            </p>
          </Card>
        </section>
        <section className="time-info">
          <Card height="10rem">
            <div className="timeline">
              <p>
                {`Started on: ${project?.createdDate.toLocaleDateString(
                  'en-GB',
                )} ➡ Due by: ${project?.expectedEndDate.toLocaleDateString(
                  'en-GB',
                )}`}
              </p>
              <meter
                id="date"
                min={project?.createdDate.valueOf()}
                max={project?.expectedEndDate.valueOf()}
                value={new Date().valueOf()}
              ></meter>
            </div>
          </Card>
        </section>
        <section className="tasks-info">
          <Card height={tasks ? '25rem' : '10rem'}>
            {/* <div className="tasks"> */}
            {/* TODO: adjust scroll bar styling and card width */}
            {tasks ? <TaskList tasks={tasks} /> : <p>No tasks</p>}
            {/* </div> */}
          </Card>
          <Card height={project?.requirements ? '20rem' : '10rem'}>
            <h4>Requirements:</h4>
            <div className="requirements">
              <ul>
                {project?.requirements.map((requirement, index) => (
                  <li>{requirement}</li>
                ))}
              </ul>
            </div>
          </Card>
        </section>
      </ProjectInfo>
    </ProjectCont>
  );
}
