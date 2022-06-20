import styled from '@emotion/styled';
import * as React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { breakpoints, reduceString } from '../utils/helper';
import { projectList } from '../utils/testData';
import { frontendUrls } from '../utils/urls';

const ProjectsCont = styled.div`
  margin: 0 auto;
  background-color: white;
  padding: 0 2rem;

  h3 {
    text-align: center;
  }

  hr {
    width: 10rem;
  }

  @media (min-width: ${breakpoints.lrg}px) {
    hr {
      width: 20rem;
    }
    padding: 2rem;
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
    margin: 1.5rem 0;

    /* presentation */
    border: solid 2px;
    padding: 1rem;
    border-radius: 4px;
  }

  li:hover {
    cursor: pointer;
    box-shadow: 4px 3px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 4px 3px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 3px 5px 0px rgba(0, 0, 0, 0.75);
  }

  @media (min-width: ${breakpoints.lrg}px) {
    li {
      /* width: 30rem;
      height: 10rem; */
    }
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
    <ProjectsCont className="project-container">
      <h3> Projects </h3>
      <hr></hr>

      <Link to={'new'}>New Project</Link>

      <ProjectList className="project-list">
        {projectItems.map((projectItem) => (
          <li
            onClick={() =>
              navigate(`${frontendUrls.projects}/${projectItem.id}`)
            }
          >
            {/* TODO: figure out why these list items are causing horizontal overflow */}
            <img
              src="https://img.icons8.com/material-outlined/48/000000/software-box.png"
              alt="project-icon"
            />
            <h5 className="name">{projectItem.name}</h5>
            <p className="desc">{reduceString(projectItem.description)}</p>
          </li>
        ))}
      </ProjectList>

      {/* <Outlet /> */}
    </ProjectsCont>
  );
}
