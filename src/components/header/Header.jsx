import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import MenuContainer from '../menuContainer';
import { menuItems } from '../../data/menuItems';
import logo from '../images/avatars/logo.png'

function Header() {
  return (
                <header className={styles.header}>
                    <div className={styles.wrapper}>
                        <div className={styles.logoWrapper}>
                            <Link to="/" className={styles.logoWrapper}>
                                <img src={logo} className={styles.logo}></img>
                            </Link>
                        </div>
                        <div className={styles.navWrapper}>
                           <MenuContainer items={menuItems}/>
                        </div>  
                    </div>
                </header>
  )
}

export default Header