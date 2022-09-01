import React from 'react'
import styles from './Skills.module.css'
import Layout from '../../components/layouts/Layout'
import skills2 from '../../components/images/skillsImg/skills2.png'
import skills1 from '../../components/images/skillsImg/skills1.png'

function SkillsPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.imagesWrapper}>
          <img src={skills1} className={styles.image}/>
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