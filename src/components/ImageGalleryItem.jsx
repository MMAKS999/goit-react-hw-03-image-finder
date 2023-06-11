import React from 'react';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onSelectImage,
}) => (
  <li className="ImageGalleryItem">
    <div onClick={() => onSelectImage(largeImageURL)}>
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </div>
  </li>
);
