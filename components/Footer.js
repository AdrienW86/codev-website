import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Codev from '../assets/codev-logo.gif'
import styles from '../styles/Home.module.css'

 const Footer = () => {
  return (
    <footer className={styles.footer}>
    <a
      href="https://code-v.fr"
      target="_blank"
      rel="noopener noreferrer"
    >
      <li className={styles.navlink}>
            <Link href="https://code-v.fr">
             <Image
                className={styles.logo} 
                src={Codev}
                height= {300}
                width={300}
              />
            </Link> 
        </li>
     
    </a>
  </footer>
  )
}

export default Footer