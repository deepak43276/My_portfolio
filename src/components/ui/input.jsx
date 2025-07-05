"use client";

import styles from './input.module.css';

export function Input(props) {
  return (
    <input 
      className={styles.customInput}
      {...props} 
    />
  );
} 