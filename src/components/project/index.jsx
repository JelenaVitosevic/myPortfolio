import React from 'react'
import styles from './Project.module.css'

function Project({image, title, info}) {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.imgWrapper}>
        <img src={image} alt="project homepage" className={styles.image}/>
      </div>
      <div className={styles.textWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.info}>{info}</p>
      </div>
    </div>
  )
}

export default Project