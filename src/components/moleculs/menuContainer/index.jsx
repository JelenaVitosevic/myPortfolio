import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa';
import Menu from '../../atoms/menu';
import styles from './MenuContainer.module.scss'


function MenuContainer({items}) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className={styles.menu}>
      <FaBars className={styles.navIcon} onClick={() => setDropdown(!dropdown)}/>
      {dropdown && <Menu list={items}/>}
    </div>
  )
}

export default MenuContainer