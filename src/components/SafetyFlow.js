import React from 'react';
import styles from './SafetyFlow.module.css';

// The diagram is an ordinary ordered list: the same words remain readable
// without styling, in assistive technology and in the plain-text catalogue.
export default function SafetyFlow({children}) {
  return <div className={styles.flow}>{children}</div>;
}
