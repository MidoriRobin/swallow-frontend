import styled from '@emotion/styled';
import * as React from 'react';
import Card from '../components/card/Card';
import SimpleForm, { Field } from '../components/form/Form';

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

export interface IProjectFormProps {}

type projectData = {
  name: string;
  type: string;
  description: string;
  requirement: string;
  dueDate: Date;
  groupId: string;
};

export function ProjectForm() {
  const [error, setError] = React.useState<string>();
  const [success, setSuccess] = React.useState<boolean>();

  const projectFormFields: Field[] = [
    {
      name: 'Project Name',
      size: 'med',
      type: 'text',
      style: {},
      required: true,
      key: 'projectName',
    },
    {
      name: 'Project Type',
      size: 'med',
      type: 'text',
      style: {},
      required: true,
      key: 'projectType',
    },
    {
      name: 'Description',
      size: 'med',
      type: 'textarea',
      style: {},
      required: true,
      key: 'description',
    },
    {
      /* TODO: A list of requirements that can be incremented and added to a list 
        which should filter into an array of strings 
        in the form of {Requirement Name:Requirement Descriptions}
      */
      name: 'Requirements',
      size: 'med',
      type: 'textarea',
      style: {},
      required: true,
      key: 'requirements',
    },
    {
      name: 'Due Date',
      size: 'med',
      type: 'text',
      style: {},
      required: false,
      key: 'expectedEndDate',
    },
    {
      name: 'Group',
      size: 'med',
      type: 'dropdown',
      style: {},
      required: true,
      key: 'groupId',
      /* TODO: Fetch groupid info, should this be an object of 
        key(list item) : value (submitted) pairs
      */
      selectOptions: [
        { key: 'group1', value: '1' },
        { key: 'group2', value: '2' },
        { key: 'group3', value: '3' },
      ],
    },
  ];

  function submitNewProject(projectData: projectData) {
    console.log('Project form data submitted');
    console.log(projectData);
    //TODO: validate data

    // createProject(projectData)
  }

  return (
    <TaskFormCont>
      <Card height="max-content">
        <h4>New Project</h4>
        {error && <div>{error}</div>}
        {success && <div>Project Created!</div>}
        <SimpleForm
          submitAction={submitNewProject}
          fieldItems={projectFormFields}
          className="form"
        />
      </Card>
    </TaskFormCont>
  );
}
