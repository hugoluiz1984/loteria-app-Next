import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Nav from './api/Nav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <Head>
        <title>Loteria da Sorte</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
           <Link href="/">Loterias da Sorte!</Link>
        </h1>


        <div className={styles.grid}>
         <Link href="/mega" className={styles.card}>
            <a className={styles.card}><h2>Mega-Sena &rarr;</h2>
            <p>A Mega-Sena paga milhões para o acertador dos 6 números sorteados. </p></a>
          </Link>

          <Link href="/lotofacil" className={styles.card}>
          <a className={styles.card}><h2>Loto-Fácil &rarr;</h2>
            <p>A Lotofácil é, como o próprio nome diz, fácil de apostar e principalmente de ganhar. </p></a>
          </Link>

          <Link
            href="/quina"
            className={styles.card}
          >
            <a className={styles.card}><h2>Quina &rarr;</h2>
            <p>Com a Quina basta marcar de 5 a 15 números dentre os 80 disponíveis no volante e torcer.</p></a>
          </Link>

          <Link
            href="/lotomania"
            className={styles.card} 
          >
            <a className={styles.card}><h2>Lotomania &rarr;</h2>
            <p>
            A Lotomania é fácil de jogar e de ganhar: basta escolher 50 números .
            </p></a>
            
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link
          href=""
          target="_blank"
          rel="noopener noreferrer"
        ><a>
          Powered by Hugo Gama{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span></a>
        </Link>
      </footer>
    </div>
  )
}
