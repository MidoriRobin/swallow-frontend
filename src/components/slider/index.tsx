import styled from '@emotion/styled';
import * as React from 'react';
import { useSpringCarousel } from 'react-spring-carousel';

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
  background-color: red;
  color: white;
  height: inherit;
`;

const SlideBtn = styled.button``;

const BtnArea = styled.div`
  display: flex;
  z-index: 3;
  position: absolute;
  justify-content: space-between;
  width: -webkit-fill-available;
  top: 14rem;
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
      {/* <BtnArea className="btn-layer">
        <SlideBtn type="button" onClick={slideToPrevItem}>
          Prev Item
        </SlideBtn>
        <SlideBtn type="button" onClick={slideToNextItem}>
          Next Item
        </SlideBtn>
      </BtnArea> */}
    </SlideCont>
  );
}
