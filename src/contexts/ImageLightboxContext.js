import React, { createContext, useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';

const defaultValue = {
  images: [],
  indexImage: null,
  actions: {
    setImages() {},
    setIndexImage() {},
  },
};

export const ImageLightboxContext = createContext(defaultValue);

export function ImageLightboxProvider({ children }) {
  const [imageLightboxState, setImageLightboxState] = useState(defaultValue);
  const setImages = (images) =>
    setImageLightboxState({
      ...imageLightboxState,
      images,
      indexImage: 0,
    });
  const setIndexImage = (index) =>
    setImageLightboxState({
      ...imageLightboxState,
      indexImage: index,
    });

  const contextValue = {
    ...imageLightboxState,
    actions: {
      setImages,
      setIndexImage,
    },
  };

  return (
    <ImageLightboxContext.Provider value={contextValue}>
      {children}
    </ImageLightboxContext.Provider>
  );
}

export function ImageLightboxConsumer({ children }) {
  return (
    <ImageLightboxContext.Consumer>
      {(value) => {
        const { images, indexImage, actions } = value;
        const { setImages, setIndexImage } = actions;
        const onCloseRequest = () => {
          setImages([]);
        };

        return (
          <>
            {children}
            {(images || []).length > 0 && (
              <Lightbox
                onCloseRequest={onCloseRequest}
                mainSrc={images[indexImage]}
                nextSrc={images[(indexImage + 1) % images.length]}
                prevSrc={
                  images[(indexImage + images.length - 1) % images.length]
                }
                onMovePrevRequest={() =>
                  setIndexImage(
                    (indexImage + images.length - 1) % images.length,
                  )
                }
                onMoveNextRequest={() =>
                  setIndexImage((indexImage + 1) % images.length)
                }
              />
            )}
          </>
        );
      }}
    </ImageLightboxContext.Consumer>
  );
}
