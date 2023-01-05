import Head from 'next/head'
import Card from '../components/Card'

import styles from '../styles/Home.module.css'
import Image from 'next/image'
import template1 from '../public/assets/template1.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="codev, créateur de sites web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Jetez un oeil à nos <a href="https://nextjs.org">templates</a>
        </h1>

        <div className={styles.grid}>
            <Card
              title = "Services"
              url = "https://template1.codev.website"
              template = {template1}
            />
             <Card
              title = "E-commerce"
              url = "https://template2.codev.website"
              template = {template1}
            />
             <Card
              title = "Restauration"
              url = "https://template1.codev.website"
              template = {template1}
            />
             <Card
              title = "Cosmétique"
              url = "https://template1.codev.website"
              template = {template1}
            />         
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
