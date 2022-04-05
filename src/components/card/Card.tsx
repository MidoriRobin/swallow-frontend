import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import useMediaQuery from '../../hooks/useMediaQuery';

type Card = {
  isDesktop?: boolean;
  custHeight?: string;
  custWidth?: string;
  image?: string | undefined;
};

const CardWrap = styled.div<Card>`
  /* Layout */
  display: flex;
  /* TODO: change this to accept props */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${({ custHeight }) => (custHeight ? custHeight : '30rem')};
  width: ${({ custWidth }) => (custWidth ? custWidth : '20rem')};
  max-height: ${({ isDesktop }) => (isDesktop ? '50rem' : '40rem')};
  max-width: ${({ isDesktop }) => (isDesktop ? '60rem' : '40rem')};
  /* padding-left: 1rem;
  padding-right: 1rem; */

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
}

export default function Card({ image, children, width, height }: ICardProps) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <CardWrap
      className="card"
      image={image === 'none' ? 'none' : image}
      custHeight={height}
      custWidth={width}
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
