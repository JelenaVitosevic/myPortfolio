import React from 'react'
import Header from '../moleculs/header'
import Footer from '../atoms/footer'
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