import React from 'react'
import styles from './Menu.module.css'
import {Link} from 'react-router-dom'
import { FaUserAlt, FaRegChartBar, FaCog, FaDoorOpen } from 'react-icons/fa';

function Menu() {
  return (
   <div className={styles.container}>
    <div className={styles.menuContainer}>
            <nav className={styles.nav}>
                <ul className={styles.sidebarList}>
                    <li className={styles.sidebarItem}>
                        <Link to='/' className={styles.sidebarItemLink}>
                            home
                        </Link>
                    </li>
                    <li className={styles.sidebarItem}>
                        <Link to='/about' className={styles.sidebarItemLink}>
                            about
                        </Link>
                    </li>
                    <li className={styles.sidebarItem}>
                        <Link to='/projects' className={styles.sidebarItemLink}>
                            projects
                        </Link>
                    </li>
                    <li className={styles.sidebarItem}>
                        <Link to='/resime' className={styles.sidebarItemLink}>
                            resime
                        </Link>
                    </li>
                    <li className={styles.sidebarItem}>
                        <Link to='/skills' className={styles.sidebarItemLink}>
                            skills
                        </Link>
                    </li>
                    <li className={styles.sidebarItem}>
                        <Link to='/experience' className={styles.sidebarItemLink}>
                            experience
                        </Link>
                    </li>
                    <li className={styles.sidebarItem}>
                        <Link to='/education' className={styles.sidebarItemLink}>
                            education
                        </Link>
                    </li>
                    <li className={styles.sidebarItem}>
                        <Link to='/educationRoadmap' className={styles.sidebarItemLink}>
                            education roadmap
                        </Link>
                    </li>
                    <li className={styles.sidebarItem}>
                        <Link to='/contact' className={styles.sidebarItemLink}>
                            contact
                        </Link>
                    </li>
                </ul>
            </nav>
    </div>
  </div>
  )
}

export default Menu