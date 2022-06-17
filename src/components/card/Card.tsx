import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import useMediaQuery from '../../hooks/useMediaQuery';

type Card = {
  isDesktop?: boolean;
  custHeight?: string;
  custWidth?: string;
  image?: string | undefined;
  padding?: string;
};

const CardWrap = styled.div<Card>`
  /* Layout */
  display: flex;
  /* TODO: change this to accept props */
  flex-direction: column;
  /* ? These affect overflow scroll */
  /* align-items: center;
  justify-content: center; */
  height: ${({ custHeight }) => (custHeight ? custHeight : '30rem')};
  width: ${({ custWidth }) => (custWidth ? custWidth : '20rem')};
  max-height: ${({ isDesktop }) => (isDesktop ? '50rem' : 'min-content')};
  max-width: ${({ isDesktop }) => (isDesktop ? '60rem' : '40rem')};
  padding-left: 1rem;
  padding-right: 1rem;
  padding: 2rem;
  margin: 2rem 0;

  /* Presentation */
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.36);
  -webkit-box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.36);
  background-image: ${({ image }) => `url(${image})`};
`;

interface ICardProps {
  image?: string;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  padding?: string;
}

export default function Card({
  image,
  children,
  width,
  height,
  padding,
}: ICardProps) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <CardWrap
      className="card"
      image={image === 'none' ? 'none' : image}
      custHeight={height}
      custWidth={width}
      padding={padding}
    >
      {children}
    </CardWrap>
  );
}

Card.propTypes = {
  children: PropTypes.any,
  width: PropTypes.string,
  height: PropTypes.string,
  orientation: PropTypes.string,
};
