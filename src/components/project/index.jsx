import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Project.module.css'

function Project({image, title, info}) {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.imgWrapper}>
        <img src={image} alt="project homepage" className={styles.image}/>
      </div>
      <div className={styles.textWrapper}>
        <a href="https://github.com/JelenaVitosevic/cirillo_" target="_blank" className={styles.link}>
          <h3 className={styles.title}>{title}</h3>
        </a>
        <p className={styles.info}>{info}</p>
        <a className={styles.link}>read more</a>
      </div>
    </div>
  )
}

export default Project