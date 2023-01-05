import Head from 'next/head'
import Card from '../components/Card'
import Footer from '../components/Footer'

import {data} from './api/data.js'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title> Notre catalogue </title>
        <meta name="description" content="codev, créateur de sites web" />
       
      </Head>
       <Navbar/>
     

      <main className={styles.main}>
        <h1 className={styles.title}>
          Nos <a href="https://nextjs.org">templates</a>
        </h1>

        <div className={styles.grid}>
          {data.map((el, index) => {
            return <Card key = {index} title = {el.title} url = {el.url} template = {el.cover}/>
          })}         
        </div>
      </main>
     
    </div>
  )
}
