import React from 'react';
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import Link from 'next/link'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('/')
  return (
    <nav className={styles.nav}>
      <Link href="/" className={activeNav === '/'? styles.active: ''} 
      onClick={()=> setActiveNav('/')}><a>Home</a></Link>
      <Link href="/mega" className={activeNav === '/mega'? styles.active: ''} 
      onClick={()=> setActiveNav('/mega')} ><a>Mega</a></Link>
      <Link href="/lotofacil" className={activeNav === '/lotofacil'? styles.active: ''} 
      onClick={()=> setActiveNav('/lotofacil')}><a>Lotofácil</a></Link>
      <Link href="/lotomania" className={activeNav === '/lotomania'? styles.active: ''} 
      onClick={()=> setActiveNav('/lotomania')}><a>Lotomania</a></Link>
      <Link href="/quina" className={activeNav === '/quina'? styles.active: ''} 
      onClick={()=> setActiveNav('/quina')}><a>Quina</a></Link>
    </nav>
  )
}

export default Nav