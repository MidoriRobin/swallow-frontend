import styled from '@emotion/styled';
import * as React from 'react';

const breakpoints = [425, 768, 1024, 1440];

const HomeWrap = styled.div`
  /* Layout */
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  /* Presentation */

  @media (min-width: ${breakpoints[2]}px) {
    width: 80%;
  }
`;

const CaroWrap = styled.div`
  /* Layout */
  width: 100%;
  height: 20rem;
  margin: 2rem 0;
  /* Presentation */
  border: solid black 2px;
`;

const InfoWrap = styled.div`
  /* Layout */
  width: 100vw;
  display: flex;
  flex-direction: column nowrap;
  justify-content: center;

  /* Presentation */
  border: solid red 2px;

  ul {
    width: inherit;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    height: max-content;
    border: green solid 1.5px;
    margin: 3rem 0;
  }
`;

function Home(): JSX.Element {
  return (
    <HomeWrap className="home-wrapper">
      <CaroWrap className="carosel-wrapper">Carosel</CaroWrap>
      <InfoWrap>
        <ul className="info-items">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </InfoWrap>
    </HomeWrap>
  );
}

export default Home;
