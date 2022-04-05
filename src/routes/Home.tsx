import styled from '@emotion/styled';
import * as React from 'react';
import Slider from '../components/slider/';

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

  @media (min-width: ${breakpoints[2]}px) {
    width: 80%;
    flex-direction: row wrap;
    justify-content: center;
  }
`;

function Home(): JSX.Element {
  const sliderItems = [
    { id: 'thing1', renderItem: <div>Item 1</div> },
    { id: 'thing2', renderItem: <div>Item 2</div> },
    { id: 'thing3', renderItem: <div>Item 3</div> },
    { id: 'thing4', renderItem: <div>Item 4</div> },
  ];

  return (
    <HomeWrap className="home-wrapper">
      <CaroWrap className="carosel-wrapper">
        <Slider items={sliderItems} />
      </CaroWrap>
      <InfoWrap className="info-wrapper">
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
