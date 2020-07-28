import React from 'react';

import s from './Container.module.css';

const Container = ({ children, className, white = false }) => {
  return (
      <div className={`${s.container} ${white && s.white} ${className}`}>
        {children}
      </div>
  );
};

export default Container;