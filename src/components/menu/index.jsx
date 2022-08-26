import React from 'react'
import styles from './Menu.module.css'
import {Link} from 'react-router-dom'

function Menu({list}) {
  return (
   <div className={styles.container}>
    <div className={styles.menuContainer}>
            <nav className={styles.nav}>
                <ul className={styles.sidebarList}>
                    {list.map((item) => {
                        return (
                            <div className={styles.menuItemWrapper}>
                                <Link to={item.url} className={styles.sidebarItemLink} key={item.id}>
                                    {item.tittle}
                                </Link>
                                
                            </div>
                        ) 
                    })}
                </ul>
            </nav>
    </div>
  </div>
  )
}

export default Menu