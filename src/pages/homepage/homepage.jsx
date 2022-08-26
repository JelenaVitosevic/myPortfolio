import React from 'react'
import Contact from '../../components/contact'
import Layout from '../../components/layout/Layout'
import styles from './Homepage.module.css'
import jecacv from './jecacv.png'

function Homepage() {
  return (
    
        <Layout>
          <div className={styles.content}>
            <Contact/>
            <div className={styles.contentWrapper}>
              <img className={styles.image} src={jecacv}></img>
              <h1 className={styles.title}>Hello I'm Jelena Vitosevic</h1>
              <p className={styles.text1}>frontend developer with an sport & physical education background</p>
              <p className={styles.text2}>In my free time, you can find me in the nature, in the gym or in the kitchen.
A chef for family and friends who dreams of one day being the author of
an app with delicious and healthy recipes. </p>
              <div className={styles.buttonWrapper}>
                <button className={styles.button}>MY RESUME</button>
                <button className={styles.button}>MY PROJECTS</button>
                <button className={styles.button}>MY SKILLS</button>
              </div>
            </div>
          </div>
        </Layout>
        
  )
}

export default Homepage