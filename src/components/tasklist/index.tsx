import styled from '@emotion/styled';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { breakpoints } from '../../utils/helper';
import { frontendUrls } from '../../utils/urls';

const TaskListCont = styled.div`
  /* Layout */
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  overflow: auto;
  padding: 0 0.5rem;

  /* Presentation */
  /* border: solid black 1px; */
  margin: 1rem auto;

  ul {
    list-style-type: none;
    list-style: none;
    padding: 0;
  }

  li {
    /* border: solid red 1px; */
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
    text-align: center;
    margin: 0;
    padding: 1rem 0;
    box-shadow: 1px 5px 9px -1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 1px 5px 9px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 5px 9px -1px rgba(0, 0, 0, 0.75);
    border-radius: 0.2rem;
  }
`;

interface ITaskList {
  id: string;
  name: string;
  description: string;
  dueDate: Date;
  status: string;
}

export function TaskList({ tasks }: { tasks: ITaskList[] }) {
  let navigate = useNavigate();

  function goToTask(id: string): void {
    navigate(`${frontendUrls.task}/${id}`);
  }

  return (
    <TaskListCont className="task-list">
      <h4>Tasks</h4>
      <ul>
        {tasks?.map((task) => (
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
            <button onClick={() => goToTask(task.id)}>Open Task</button>
          </li>
        ))}
      </ul>
    </TaskListCont>
  );
}
