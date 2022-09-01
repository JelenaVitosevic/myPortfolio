import React from 'react'
import Header from '../header'
import Footer from '../footer'
import styles from './Layout.module.scss'

function Layout({children}) {
    return (
      <div className={styles.layout}>
          <Header/>
              {children}
          <Footer/>
      </div>
    )
  }

export default Layout