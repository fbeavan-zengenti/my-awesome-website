import React, { useState } from 'react';

import SlideStyled from './Slide.styled';
import Image, { ImageObject } from '~/components/image/Image';
interface Props {
  className?: string;
  image: ImageObject;
  hasScrollImage?: boolean
}

const Slide: React.FC<Props> = ({ className, image, hasScrollImage }) => {
  if (!image) return null;

  return (
    <SlideStyled
      className={className}
      hasScrollImage={hasScrollImage}
      image={image}
    >
      {!hasScrollImage && <Image image={image} className="slide__image" />}
      {hasScrollImage && (
        <div
          className="slide__bg-image-wrapper"
        >
          <div className="slide__bg-image" />
        </div>
      )}
    </SlideStyled>
  );
};

export default Slide;