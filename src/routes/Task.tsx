import styled from '@emotion/styled';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { task } from '../apis/taskAPIs';
import { taskListTest } from '../utils/testData';

const TaskCont = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  padding: 0 2rem;

  /* Presentation */

  section {
    border: solid black 1px;
    margin: 1rem 0;
    padding: 0 1rem;
    background: white;
  }

  div.desc-area {
    display: flex;
    flex-direction: column;

    p {
      border: solid 1px black;
      padding: 0.5rem;
      border-radius: 5px;
    }
  }
`;

export interface ITaskProps {}

export default function Task(props: ITaskProps) {
  const [task, setTask] = React.useState<task>();
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const { taskId } = useParams();

  React.useEffect(() => {
    setTask(taskListTest[1]);
    console.log('task loaded: ', task);
  }, []);

  return (
    <TaskCont className="task-container">
      <section className="header-area">
        <h3>{task?.name}</h3>
        <div className="button-area">
          {' '}
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </section>
      <section className="task-dates">
        <p>Created on: {task?.createdDate.toDateString()}</p>
        <p>Complete By: {task?.dueDate.toDateString()}</p>
      </section>
      <section className="more-info">
        <p>Completed on: {task?.completedDate.toDateString()}</p>
        <p>Status: {task?.status}</p>
        <p>Assigned To: {task?.assignedId}</p>
        <p>Created By: {task?.creatorId}</p>
        <div className="desc-area">
          <div>Description:</div>
          <p>{task?.description}</p>
        </div>
        <p>Time Taken: {task?.timeTaken} Hours</p>
      </section>
    </TaskCont>
  );
}
