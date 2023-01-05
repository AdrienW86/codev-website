import React from 'react';
import Image from 'next/image'

import styles from '../styles/Home.module.css'

 const Card = (props) => {
  return (
    <a href={props.url} className={styles.card}>
            <h2> {props.title} &rarr;</h2>
            <Image
              width={100}
              height= {100}
              src= {props.template}
              priority='blur'
              layout='responsive'
              alt= 'photo du template'
            />
          </a>
  )
}

export default Card