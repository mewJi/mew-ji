import React, { useState } from 'react';
import CarouselNaja from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function Carousel({ imageUrls }) {
  if (!imageUrls || imageUrls.length === 0) {
    return null;
  }

  return (
    <CarouselNaja plugins={['arrows', 'clickToChange', 'centered']}>
      {imageUrls.map((imageUrl) => (
        <img src={imageUrl} />
      ))}
    </CarouselNaja>
  );
}
