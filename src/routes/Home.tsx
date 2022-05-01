import styled from '@emotion/styled';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card/Card';
import Slider from '../components/slider/';
import useAuth from '../hooks/useAuth';
import { breakpoints } from '../utils/helper';

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
  margin: 1rem 0;
  /* Presentation */
  /* border: solid black 2px; */

  @media (min-width: ${breakpoints[2]}px) {
    height: 30rem;
  }
`;

const InfoWrap = styled.div`
  /* Layout */
  width: 100vw;
  display: flex;
  flex-direction: column nowrap;
  justify-content: center;

  /* Presentation */
  /* border: solid red 2px; */

  ul {
    width: inherit;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: max-content;
    /* border: green solid 1.5px; */
    margin: 3rem 0;
  }

  @media (min-width: ${breakpoints[2]}px) {
    width: 100%;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    li {
      width: fit-content;
      flex-direction: row wrap;
      justify-content: center;
    }
  }

  @media (max-width: ${breakpoints[2]}px) {
    li:last-child {
      margin: 0 auto;
    }
  }
`;

const Image = styled.div<{ background?: string }>`
  width: 100%;
  height: 100%;
  background-image: ${({ background }) => background};
  background-size: cover;
  background-position: center center;
`;

function Home(): JSX.Element {
  let auth = useAuth();
  let navigate = useNavigate();

  React.useEffect(() => {
    // When logged in route to dashboard instead

    if (auth.user.loggedIn) {
      navigate('/dashboard', { replace: true });
    }
  }, []);

  const sliderItems = [
    {
      id: 'thing1',
      renderItem: <Image background="url(https://picsum.photos/id/124/500)" />,
    },
    {
      id: 'thing2',
      renderItem: <Image background="url(https://picsum.photos/id/123/500)" />,
    },
    {
      id: 'thing3',
      renderItem: <Image background="url(https://picsum.photos/id/125/500)" />,
    },
    {
      id: 'thing4',
      renderItem: <Image background="url(https://picsum.photos/id/126/500)" />,
    },
    {
      id: 'thing5',
      renderItem: <Image />,
    },
  ];

  return (
    <HomeWrap className="home-wrapper">
      <CaroWrap className="carosel-wrapper">
        <Slider items={sliderItems} />
      </CaroWrap>
      <InfoWrap className="info-wrapper">
        <ul className="info-items">
          <li>
            <Card height="15rem">Card 1</Card> <span />
            <p>Minimalist</p>
          </li>
          <li>
            <Card height="15rem">Card 2</Card>
            <span />
            <p>Intuitive</p>
          </li>
          <li>
            <Card height="15rem">Card 3</Card>
            <span />
            <p>Simple</p>
          </li>
        </ul>
      </InfoWrap>
      {/* TODO: Add footer */}
    </HomeWrap>
  );
}

export default Home;
