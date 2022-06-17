import styled from '@emotion/styled';
import * as React from 'react';
import Card from '../components/card/Card';
import SimpleForm, { Field } from '../components/form/Form';

export interface ITaskFormData {}

const TaskFormCont = styled.div`
  /* Layout */
  display: flex;
  justify-content: center;
  align-items: center;
  /* Presentation */

  /* Create base class for forms to be overwritten */

  /* Inner classes */
  .form {
    input,
    textarea {
      margin: 0.5rem 0;
    }

    label {
      display: flex;
      flex-direction: column;
    }
  }
`;

const FormArea = styled.div`
  .form {
    display: flex;
    flex-direction: column;

    input {
      display: flex;
      flex-direction: column;
      border: none;
      border-bottom: solid 1.5px black;
      border-radius: 2px;
      background-color: #dbdbdb83;
    }

    label {
      margin: 1rem 0;
    }

    button {
      width: 7rem;
      height: 1.4rem;
      background-color: white;
      color: #4caf50;
      border: none;
      border: solid 1px #4caf50;
      border-radius: 2px;
      transition-duration: 0.4s;
      align-self: center;
    }

    button:hover {
      background-color: #4caf50;
      color: black;
      cursor: pointer;
    }
  }
`;

type taskData = {
  name: string;
  type: string;
  status: 'todo';
  description: string;
  creatorId: string;
  assignedId: string;
  projectId: string;
  weight: number;
  createdDate: Date;
  sprint?: number;
};

export function TaskForm() {
  const [error, setError] = React.useState<string>();
  const [success, setSuccess] = React.useState<boolean>();

  const taskFormFields: Field[] = [
    {
      name: 'Task Name',
      size: 'med',
      type: 'text',
      style: {},
      required: true,
      key: 'taskname',
    },
    {
      name: 'Type',
      size: 'sml',
      type: 'text',
      style: {},
      required: false,
      key: 'type',
    },
    {
      name: 'Description',
      size: 'lrg',
      type: 'textarea',
      style: {},
      required: true,
      key: 'description',
    },
    {
      name: 'Assign To',
      size: 'med',
      type: 'dropdown',
      style: {},
      required: true,
      key: 'assignedId',
      selectOptions: ['User', 'User2', 'User3'],
    },
    {
      name: 'Project',
      size: 'med',
      type: 'dropdown',
      style: {},
      required: true,
      key: 'projectId',
      selectOptions: ['Project 1', 'Project 2'],
    },
    {
      name: 'Weight',
      size: 'med',
      type: 'number',
      style: {},
      required: false,
      key: 'weight',
    },
    {
      name: 'Sprint',
      size: 'med',
      type: 'number',
      style: {},
      required: false,
      key: 'sprint',
    },
  ];

  function submitNewTask(taskData: taskData) {
    console.log('task form data: ', taskData);
    //TODO: api call to submit task
  }

  return (
    <TaskFormCont>
      <Card height="max-content">
        <FormArea className="form-area">
          <h4>Task Form</h4>
          {error && <div>{error}</div>}
          {success && <div>Task Created!</div>}
          <SimpleForm
            submitAction={submitNewTask}
            fieldItems={taskFormFields}
            className="form"
          />
        </FormArea>
      </Card>
    </TaskFormCont>
  );
}
