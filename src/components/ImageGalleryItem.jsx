import React from 'react';

export const ImageGalleryItem = ({foundArray}) => (
  <div>
    {foundArray && <div> hi </div>}
  </div>
  
);
  // <ul className="gallery">
  //   {foundArray &&
  //     foundArray.map((id, webformatURL, largeImageURL) => (
  //       <li className="gallery-item" key={id}>
  //         <img src={webformatURL} alt={id} />
  //       </li>
  //     ))}
  // </ul>