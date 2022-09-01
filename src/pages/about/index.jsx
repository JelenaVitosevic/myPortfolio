import React from 'react'
import Layout from '../../components/layout'
import styles from './About.module.scss'
import treasure from '../../components/images/avatars/treasure.png'
import { Link } from 'react-router-dom'


function About() {
  return (
    <Layout>
      <div className={styles.content}>
        <div className={styles.leftContentWrapper}>
          <div className={styles.borderWrapper}>
            <div className={styles.leftContent}>
                <div className={styles.item}>
                  <h3 className={styles.tittle}>NAME</h3>
                  <p className={styles.info}>Jelena Vitosevic</p>
                </div>
                <div className={styles.item}>
                  <h3 className={styles.tittle}>BIRTHDAY</h3>
                  <p className={styles.info}>08.03.1997.</p>
                </div>
                <div className={styles.item}>
                  <h3 className={styles.tittle}>ROLE</h3>
                  <p className={styles.info}>Frontend Developer</p>
                </div>
                <div className={styles.item}>
                  <h3 className={styles.tittle}>EMAIL</h3>
                  <p className={styles.info}>vitosevicjelena83997@gmail.com</p>
                </div>
                <div className={styles.item}>
                  <h3 className={styles.tittle}>WEBSITE</h3>
                  <p className={styles.info}>www.jelenavitosevic.com</p>
                </div>
                <div className={styles.item}>
                  <h3 className={styles.tittle}>LOCATION</h3>
                  <p className={styles.info}>Belgrade, Serbia</p>
                </div>
                <div className={styles.item}>
                  <h3 className={styles.tittle}>LANGUAGES</h3>
                  <p className={styles.info}>Serbian Native <br></br> English</p>
                </div>
                <div className={styles.item}>
                  <h3 className={styles.tittle}>EDUCATION</h3>
                  <p className={styles.info}>Zemun Gymnasium, <br></br> science and mathematics department <br></br> <br></br>Faculty of sport and physical education, <br></br> University of Belgrade</p>
                </div>
                <div className={styles.item}>
                  <h3 className={styles.tittle}>INTERESTS</h3>
                  <p className={styles.info}>UI/UX <br></br> Cooking and inventing new healthy recepies <br></br> Travel and exploring nature</p>
                </div>
              </div>
            </div>
        </div>
        <div className={styles.rightContentWrapper}>
          <div className={styles.textAboutMeWrapper}>
            <h2 className={styles.tittleAboutMe}>I'm Jelena, a frontend developer based in Belgrade!</h2>
            <p className={styles.textAboutMe}>
              Hi there, I was born and raised in Belgrade, although I feel like a child from the countryside. I currently live in Belgrade, with the aspiration to code from a vineyard in Tuscany in the future. And to cook delicious food during breaks, of course!
              I went to the Faculty of Sports and Physical Education and came back as a programmer. (Oh yes!) In the "educational roadmap" section, you can learn about my challenging but an interesting path to the world of IT. I look forward to its continued expansion!
            </p>
          </div>
          <div className={styles.imgWrapper}>
            <Link to='/educationRoadmap'><img src={treasure} className={styles.avatar}></img></Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About