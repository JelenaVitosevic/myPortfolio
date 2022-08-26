import React from 'react';
import styles from './Header.module.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Menu from '../menu';
import {useState} from 'react';

function Header() {

  const [dropdown, setDropdown] = useState(false);

  return (
                <header className={styles.header}>
                    <div className={styles.wrapper}>
                        <div className={styles.logoWrapper}>
                            <Link to="/" className={styles.logo}>LOGO</Link>
                        </div>
                        <div className={styles.navWrapper}>
                            <FaBars className={styles.navIcon} onClick={() => setDropdown(!dropdown)}/>
                        </div>  
                    </div>
                    {dropdown && <Menu/>}
                </header>
  )
}

export default Header