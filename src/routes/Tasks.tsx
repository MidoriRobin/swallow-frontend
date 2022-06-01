import styled from '@emotion/styled';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';
import { breakpoints } from '../utils/helper';
import { task, taskListTest } from '../utils/testData';

const TasksCont = styled.div`
  /* Layout */

  /* Presentation */
`;

const ListArea = styled.section`
  /* Layout */

  /* Presentation */

  @media (min-width: ${breakpoints.lrg}px) {
    section.task-status-area {
      display: flex;
      flex-direction: row;
    }
  }
`;

enum taskEnum {
  TODO = 'to-do',
  INPR = 'in-progress',
  DONE = 'done',
  ALL = 'all',
}

function Tasks(): JSX.Element {
  // const taskStatusList = ['todo', 'in-progress', 'done', 'all']
  const [taskStatus, setTaskStatus] = React.useState<taskEnum>(taskEnum.TODO);
  const [taskList, setTaskList] = React.useState<task[]>();

  let { projId } = useParams();

  let isDesktop = useMediaQuery(`(min-width: ${breakpoints.lrg}px)`);

  React.useEffect(() => {
    if (projId) {
      getTasks(projId);
    }

    // TODO: REMOVE
    setTaskList(taskListTest);
  }, []);

  function handleStatusChange(e: React.FormEvent<HTMLSelectElement>) {
    e.preventDefault();

    const status = e.currentTarget.value as taskEnum;

    setTaskStatus(status);
  }

  function getTasks(projectId: string) {
    // TODO: fetch based on project id
    if (true) {
      setTaskList(taskListTest);
    }
  }

  function filterTasks(taskStatus: taskEnum): task[] {
    let filteredTasks: task[] = [];

    if (taskList) {
      filteredTasks = taskList?.filter(
        (taskItem) => taskItem.status === taskStatus,
      );
    }

    return filteredTasks;
  }

  // TODO: Simplify
  function showTaskList(taskStatus: taskEnum): React.ReactElement {
    let taskElement: React.ReactElement;

    // TODO: task element should conditionally render the task items based on the enum passed in
    // by doin a filter search through a list of tasks

    if (taskStatus === taskEnum.ALL) {
      taskElement = (
        <ul>
          {taskList?.map((taskItem, index) => (
            <li key={taskItem.id}>{taskItem.name}</li>
          ))}
        </ul>
      );

      showAllTasks();

      return taskElement;
    }

    let filteredTasks = filterTasks(taskStatus);

    taskElement = (
      <ul className={taskStatus}>
        {filteredTasks.map((filteredTask, index) => (
          <li key={filteredTask.id}>{filteredTask.name}</li>
        ))}
      </ul>
    );

    return taskElement;
  }

  // TODO: Simpliify
  function showAllTasks(): React.ReactElement {
    let statusList: string[] = [];
    let taskElements: React.ReactElement;
    let taskByStatus: { status: string; task: task[] }[] = [];

    if (!taskList) {
      return (
        <ul>
          <li>No items available</li>
        </ul>
      );
    }

    //! Create a list of unique statuses
    taskList?.forEach((taskFr, index) => {
      if (!statusList.includes(taskFr.status)) {
        statusList.push(taskFr.status);
      }
      return;
    });

    //! grab array of tasks by status
    statusList.forEach((status) => {
      taskByStatus.push({
        status,
        //! This creates a new task object for each task caused an error modifing the tasks coming in before showing the user
        //! find a solution that does not involve doing a soft copy of all tasks
        task: taskList?.filter((task) => task.status === status),
      });
    });

    //! Create a jsx element with tasks grouped by status
    taskElements = (
      <>
        {statusList.map((status) => {
          return (
            <ul key={status} className={status}>
              <h6>{status}</h6>
              {taskByStatus
                .find((taskStatus) => taskStatus.status === status)
                ?.task.map((taskItem) => (
                  <li key={taskItem.id}>{taskItem.name}</li>
                ))}
            </ul>
          );
        })}
      </>
    );

    return taskElements;
  }

  console.log(isDesktop);

  return (
    <TasksCont>
      <h4>Tasks</h4>
      <hr></hr>

      <ListArea>
        <div className="task-dropdown">
          <select
            disabled={isDesktop}
            name="Task State"
            id="task-state"
            onChange={handleStatusChange}
            defaultValue={isDesktop ? 'all' : 'to-do'}
          >
            {/* TODO: spread enum across options for consistency */}
            <option value="to-do">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          {/* TODO: change task enum to task status  */}
        </div>
        <section className="task-status-area">
          {!isDesktop ? showTaskList(taskStatus) : showAllTasks()}
        </section>
      </ListArea>
    </TasksCont>
  );
}

export default Tasks;
