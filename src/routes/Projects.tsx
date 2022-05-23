import styled from '@emotion/styled';
import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { projectList } from '../utils/testData';
import { frontendUrls } from '../utils/urls';

const ProjectsCont = styled.div`
  margin: 0 auto;

  h3 {
    text-align: center;
  }
`;

const ProjectList = styled.ul`
  /* Layout */
  display: flex;
  flex-direction: column;

  /* Presentation */

  list-style-type: none;
  padding-left: 0;

  li {
    /* layout */
    margin: 1rem 0;
    padding: 1rem 2rem;

    /* presentation */
    border: solid 1px black;
    border-radius: 10px;
  }

  li:hover {
    cursor: pointer;
    box-shadow: 4px 3px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 4px 3px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 3px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;

export interface IProjectsProps {}

interface ProjectSmall {
  id: string;
  name: string;
  description: string;
}

export default function Projects(props: IProjectsProps) {
  let navigate = useNavigate();
  let projectItems: ProjectSmall[] = projectList;

  function fetchProjects(userId: string) {
    // fetch endpoint url with required info
    // call function with endpoint passing id as a parameter
  }

  return (
    <ProjectsCont>
      <h3> Projects </h3>
      <hr></hr>

      <ProjectList className="project-list">
        {projectItems.map((projectItem) => (
          <li
            onClick={() =>
              navigate(`${frontendUrls.projects}/${projectItem.id}`)
            }
          >
            <img
              src="https://img.icons8.com/material-outlined/48/000000/software-box.png"
              alt="project-icon"
            />
            <h5 className="name">{projectItem.name}</h5>
            <p className="desc">{projectItem.description}</p>
          </li>
        ))}
      </ProjectList>

      <Outlet />
    </ProjectsCont>
  );
}
