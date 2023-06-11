import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
export const ImageGallery = ({ foundArray, onSelectImage }) => {
  return (
    <ul className="ImageGallery">
      {foundArray &&
        foundArray.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            onSelectImage={onSelectImage}
          />
        ))}
    </ul>
  );
};

// виділити лі як компонент який буде закидатись в ul як дитина яка буде проходитись мапом в  юл
