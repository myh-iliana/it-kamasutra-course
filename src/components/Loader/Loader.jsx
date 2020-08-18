import React from 'react';

import s from './Loader.module.scss';

import LoaderSvg from '../../img/loader.svg';

const Loader = () => {
  return (
      <div className={s.container}>
        <img src={LoaderSvg} alt="loading" />
      </div>
  );
};

export default Loader;