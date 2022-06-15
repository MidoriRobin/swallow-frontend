import styled from '@emotion/styled';
import * as React from 'react';
import Card from '../components/card/Card';
import SimpleForm, { Field } from '../components/form/Form';
import { FormArea } from './Signup';

export interface ITaskFormData {}

const TaskFormCont = styled.div`
  /* Layout */
  display: flex;
  justify-content: center;
  align-items: center;
  /* Presentation */
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
      key: 'taskname',
    },
    {
      name: 'Assign To',
      size: 'med',
      type: 'dropdown',
      style: {},
      required: true,
      key: 'assignedId',
    },
    {
      name: 'Project',
      size: 'med',
      type: 'dropdown',
      style: {},
      required: true,
      key: 'projectId',
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

  function submitNewTask(taskData: taskData) {}

  return (
    <TaskFormCont>
      <Card height="50rem">
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
