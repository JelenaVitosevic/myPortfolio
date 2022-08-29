import React from 'react'
import styles from './Skills.module.css'
import Layout from '../../components/layouts/Layout'
import html from '../../components/images/skillsImg/html.png'
import css from '../../components/images/skillsImg/css.png'
import js from '../../components/images/skillsImg/javascript.png'
import react from '../../components/images/skillsImg/react.png'
import git from '../../components/images/skillsImg/git.png'
import github from '../../components/images/skillsImg/github.png'
import npm from '../../components/images/skillsImg/npm.png'
import express from '../../components/images/skillsImg/expressJS.jpeg'

function SkillsPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.imagesWrapper}>
          <div className={styles.firstRowWrapper}>
            <div className={styles.logoWrapper}>
              <img src={html} alt="html logo" className={styles.image} />
            </div>
            <div className={styles.logoWrapper}>
              <img src={css} alt="css logo" className={styles.image} />
            </div>
          </div>
          <div className={styles.secondRowWrapper}>
            <div className={styles.logoWrapper}>
              <img src={js} alt="javascript logo" className={styles.image} />
            </div>
            <div className={styles.logoWrapper}>
              <img src={react} alt="react logo" className={styles.image} />
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.imagesWrapper}>
        <div className={styles.firstRowWrapper}>
          <div className={styles.logoWrapper}>
            <img src={npm} alt="npm logo" className={styles.image} />
          </div>
          <div className={styles.logoWrapper}>
            <img src={express} alt="expressJS logo" className={styles.image} />
          </div>
          </div>
          <div className={styles.secondRowWrapper}>
            <div className={styles.logoWrapper}>
              <img src={git} alt="git logo" className={styles.image} />
            </div>
            <div className={styles.logoWrapper}>
              <img src={github} alt="github logo" className={styles.image} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SkillsPage