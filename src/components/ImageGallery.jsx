import React from 'react';

export const ImageGallery = ({foundArray}) => {
  return (
    <ul className="gallery">
      {foundArray &&
        foundArray.map(({ id, webformatURL, largeImageURL }) => (
          <li className="gallery-item" key={id}>
            <img src={webformatURL} alt={id} />
          </li>
        ))}
    </ul>
  );
};
