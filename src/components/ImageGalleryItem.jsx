import React from 'react';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onSelectImage,
}) => (
  <li className="ImageGalleryItem">
    <button onClick={() => onSelectImage(largeImageURL)}>
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </button>
  </li>
);
