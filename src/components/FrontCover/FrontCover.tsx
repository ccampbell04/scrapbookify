import styles from './FrontCover.module.css';
import React, { ReactNode } from 'react';

function FrontCover({ children }: { children: ReactNode}) {
  return <div className={styles['book-cover']}>{children}</div>;
};

export default FrontCover;
