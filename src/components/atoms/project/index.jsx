import React from 'react'
import styles from './Project.module.scss'

function Project({image, title, info, link}) {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.imgWrapper}>
        <img src={image} alt="project homepage" className={styles.image}/>
      </div>
      <div className={styles.textWrapper}>
        <a href={link} target="_blank" className={styles.link}>
          <h3 className={styles.title}>{title}</h3>
        </a>
        <p className={styles.info}>{info}</p>
        <a className={styles.link}>read more</a>
      </div>
    </div>
  )
}

export default Project