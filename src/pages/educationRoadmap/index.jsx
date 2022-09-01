import React from 'react'
import styles from './EducationRoadmap.module.scss'
import Layout from '../../components/layout'
import happy from '../../components/images/avatars/happy.png'
import smiling from '../../components/images/avatars/smiling.png'
import insecure from '../../components/images/avatars/insecure.png'

function EducationRoadmap() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.imgWrapper}>
            <img src={happy} alt="learning stage" className={styles.image}/>
          </div>
          <div className={styles.textWrapper}>
            <h3 className={styles.title}>'The Beginning of Learning'</h3>
            <p className={styles.info}>'After graduating from college and working in the profession for a few months, I realized that this vocation did not fully fulfill me and that my curiosity about web technologies was becoming more and more pronounced. In October 2021, I had a cold longer than usual and after two days of researching web developer jobs I used my free time to start learning about frontend technologies. As expected, the first step was to install visual studio code and watch HTML and CSS tutorials on YouTube and Udemy. A mitigating circumstance was that my boyfriend is a web developer and was there to support, help and guide me whenever needed. I was full of motivation and energy to study and at that time I still had no idea how important it would be that I would not be alone in this. I was anxiously waiting to find out what was next.'</p>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.imgWrapper}>
            <img src={smiling} alt="learning stage" className={styles.image}/>
          </div>
          <div className={styles.textWrapper}>
            <h3 className={styles.title}>'Welcome javascript, nice to meet you!'</h3>
            <p className={styles.info}>'The next step, as expected, was getting to know JavaScript. My stop was Udemy again and that is when the first date of the coding world and me actually happened. A slight insecurity slowly started to appear, but I was still in control of the situation. After all, everything is unknown when youa are just starting to learn, and it was fun to learn something new again.'</p>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.imgWrapper}>
            <img src={insecure} alt="learning stage" className={styles.image}/>
          </div>
          <div className={styles.textWrapper}>
            <h3 className={styles.title}>'React.js? Here I am!'</h3>
            <p className={styles.info}>'Next was the java script framework - React.js. At first everything seemed very dynamic and much simpler than vanilla java script syntax. That bought me. But of course, as our dates became more frequent, the amount of new knowledge and information grew three times faster than my brain was capable of receiving, processing, translating and mastering. We spoke different languages, and I had to try to master his, so that our relationship wouldn not fail. I worked 2 jobs at the same time, and spent my free time at the laptop. It was getting harder, fatigue and insecurity grew, but I did not give up. The goal in front of me was clear.'</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default EducationRoadmap