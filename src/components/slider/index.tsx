import styled from '@emotion/styled';
import * as React from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import useMediaQuery from '../../hooks/useMediaQuery';
import { breakpoints } from '../../utils/helper';

const SlideCont = styled.div`
  /* Layout */
  height: inherit;
  overflow: hidden;

  /* Presentation */
`;

const CaroselArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  color: white;
  height: inherit;

  @media (min-width: ${breakpoints.lrg}px) {
    height: 28rem;
  }
`;

const SlideBtn = styled.button`
  background: var(--secondary-color-light-200);
  border: none;
  margin: 0 1rem;
`;

const BtnArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
`;

export interface ISliderProps {
  id: string;
  renderItem: JSX.Element;
}

export default function Slider({
  items,
}: {
  items: ISliderProps[];
}): JSX.Element {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({ items });

  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.lrg}px)`);

  //TODO: Create a function that starts automatically scrolling after no interaction from the user
  function autoScroll(): void {
    let itemCounter = 0;

    items.forEach(() => {
      slideToNextItem();
    });
  }

  return (
    <SlideCont className="slider-container">
      <CaroselArea className="carosel-area">{carouselFragment}</CaroselArea>{' '}
      {isDesktop && (
        <BtnArea className="btn-layer">
          <SlideBtn type="button" onClick={slideToPrevItem}>
            <img src="https://img.icons8.com/small/16/000000/back.png" />
          </SlideBtn>
          <SlideBtn type="button" onClick={slideToNextItem}>
            <img src="https://img.icons8.com/small/16/000000/forward.png" />
          </SlideBtn>
        </BtnArea>
      )}
    </SlideCont>
  );
}
