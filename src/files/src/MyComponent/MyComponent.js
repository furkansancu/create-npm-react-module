import React from 'react';

import styles from './MyComponent.module.scss';

export default function MyComponent() {
  const handleClick = () => {
    window.alert("You clicked on your component!");
  }

  return (
    <div className={styles.MyComponent} onClick={handleClick}>
      This is your component!
    </div>
  )
}