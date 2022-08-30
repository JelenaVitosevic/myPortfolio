import React from 'react'
import styles from './Contact.module.css'
import { FaEnvelope, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className={styles.followWrapper}>
        <div className={styles.textWrapper}>
        </div>
        <div className={styles.line}></div>
        <div className={styles.icons}>
            <Link className={styles.link} to='/contact'><FaEnvelope className={styles.icon}/></Link>
            <a href='https://github.com/JelenaVitosevic' target="_blank" className={styles.link}><FaGithub className={styles.icon}/></a>
            <a href='https://rs.linkedin.com/in/jelena-vito%C5%A1evi%C4%87-063b26229'  target="_blank" className={styles.link}><FaLinkedinIn className={styles.icon}/> </a> 
        </div>
        <div className={styles.line}></div>
    </div>
  )
}

export default Contact