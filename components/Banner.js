import React from 'react'
import Image from 'next/image'
import Banner_Img from '../assets/banner.jpg'
import styles from '../styles/Home.module.css'

const Banner = () => {
  return (
    <Image
        className={styles.banner}
        width={1000}
        height= {662}
        src= {Banner_Img}
        priority='blur'
        layout='responsive'
        alt= 'photo du template'
    />
  )
}

export default  Banner
