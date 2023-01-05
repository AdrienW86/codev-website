import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

import Home from '../assets/home.svg'
import Website from '../assets/website-logo.png'
import styles from '../styles/Home.module.css'

 const Navbar = () => {
  return (
   <nav className={styles.navbar}>
    <ul className={styles.ul_navbar}>
        <li className={styles.navlink}>
            <Link href="https://code-v.fr">
             <Image
                className={styles.logo} 
                src={Website}
                height= {300}
                width={300}
                alt={'lien pour aller sur code-v.fr'}
              />
            </Link> 
        </li>
        <li className={styles.navlink}>
      <Link href="/">
             <Image
                className={styles.home} 
                src={Home}
                width={50}
                height={50}
                alt={'lien pour aller sur code-v.fr'}
              />
            </Link> 
        </li>
    </ul>
   </nav>
  )
}

export default Navbar