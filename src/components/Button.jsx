import React from 'react';

export const Button = ({ onLoadMore, loading }) => (
  <button type="button" onClick={onLoadMore} className="Button">
    {' '}
    {loading ? 'Loading...' : 'load more'}{' '}
  </button>
);
