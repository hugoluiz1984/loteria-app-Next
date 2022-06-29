import React, {useState} from 'react';
import { Gerador } from '../../components/Gerador';
import List from '../../components/List';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Head from 'next/head'
import Nav from '../../components/Nav'

function Mega({ data }){

  const [showUl, setShowUl] = useState(false);

  const [quantity, setQuantity] = useState(5)
  
  let [numSorte, setNumSort] = useState ([]);
  //let num_ignorados = [0];

  const Gerar = (event) => {
    setNumSort(Gerador(quantity,80,event))
    setShowUl(true);
  }


  function Limpar(){

    setNumSort([0]);
    setShowUl(false);
  }
  function soma(){
    if (quantity<15) setQuantity(quantity + 1)
  }
  function sub(){
    
    if (quantity>5)setQuantity(quantity - 1)
  }
  return (
    <div className={styles.container}>

        <Head>
            <title>Loteria da Sorte</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <main className={styles.main}>
        
        <h3 className={styles.title}>QUINA:</h3>
        <div>Gerador de números</div>
        <div className={styles.linha}>
            
          <form className={styles.selecao}>
            <label className="Qdt">Quantidade de números: </label>
            
            <input onChange={
              e => setQuantity(e.target.value >=5 && e.target.value <=15 ? parseInt(e.target.value) : e.target.value > 5 ? parseInt(15): parseInt(5))
            } id="QtdNumMega" type="number" value={quantity} className={styles.input}></input>
            
          </form>
          <button onClick={sub} className={styles.btn_cel}>-</button>
          <button onClick={soma} className={styles.btn_cel}>+</button>
        </div>
        <div className={styles.botoes}>
          <button onClick={Gerar} className={styles.btn}>Gerar</button>
          <button onClick={Limpar} className={styles.btn }>Limpar</button>
        </div>
        <div >
          <List numSorte={numSorte} showUl={showUl} nome={styles.numeroSorteQuina}></List>
        </div>
        
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Hugo Gama{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


export default Mega;