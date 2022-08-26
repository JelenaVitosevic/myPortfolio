import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa';
import Menu from '../menu';
import styles from './MenuContainer.module.css'


function MenuContainer() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
    <FaBars className={styles.navIcon} onClick={() => setDropdown(!dropdown)}/>
    {dropdown && <Menu/>}
    </>
  )
}

export default MenuContainer