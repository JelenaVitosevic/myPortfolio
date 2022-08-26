import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import MenuContainer from '../menuContainer';
import { menuItems } from '../../data/menuItems';

function Header() {
  return (
                <header className={styles.header}>
                    <div className={styles.wrapper}>
                        <div className={styles.logoWrapper}>
                            <Link to="/" className={styles.logo}>LOGO</Link>
                        </div>
                        <div className={styles.navWrapper}>
                           <MenuContainer items={menuItems}/>
                        </div>  
                    </div>
                </header>
  )
}

export default Header