import React from 'react'

import { MyComponent } from '../src/index';

import styles from './App.module.css';

import Logo from './public/react.svg';

export default function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Container}>
        <div className={styles.Logo_Container}>
          <a href='https://github.com/furkansancu/create-react-component-package'>
            <img src={Logo} width={128} height={128} className={styles.Logo} />
          </a>
        </div>
        <div className={styles.Project_Container}>
          <h2 className={styles.Project_Header}>
            This is your Preview App
          </h2>
          <p className={styles.Project_Description}>
            Edit <div className={styles.Project_Folder}>./preview/index.js</div> to update this app.
          </p>
          <p className={styles.Project_Description}>
            To edit your component make changes on <div className={styles.Project_Folder}>./src/index.js</div>.
          </p>
        </div>
        <MyComponent />
      </div>
    </div>
  )
}