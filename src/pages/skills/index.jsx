import React from 'react'
import styles from './Skills.module.css'
import Layout from '../../components/layouts/Layout'
import html from '../../components/images/skillsImg/html.png'
import css from '../../components/images/skillsImg/css.png'
import js from '../../components/images/skillsImg/javascript.png'
import react from '../../components/images/skillsImg/react.png'
import skills2 from '../../components/images/skillsImg/skills2.png'

function SkillsPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.imagesWrapper}>
          <img src={skills2} className={styles.image}/>
        </div>
        <div className={styles.line}></div>
        <div className={styles.imagesWrapper}>
          <img src={skills2} className={styles.image}/>
        </div>
      </div>
    </Layout>
  )
}

export default SkillsPage