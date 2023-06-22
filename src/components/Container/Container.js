import React from 'react';
import css from '../Container/Container.module.css';

export const Container = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};
