import React, {useState} from 'react';
import { Gerador } from '../api/Gerador';
import List from '../api/List';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Head from 'next/head'

function Mega({ data }){

  const [showUl, setShowUl] = useState(false);

  const [quantity, setQuantity] = useState(6)
  
  let [numSorte, setNumSort] = useState ([]);
  //let num_ignorados = [0];

  const Gerar = (event) => {
    setNumSort(Gerador(quantity,60,event))
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
    
    if (quantity>6)setQuantity(quantity - 1)
  }
  return (
    <div className={styles.container}>
        <Head>
            <title>Loteria da Sorte</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <main className={styles.main}>
        
        <h3 className={styles.title}>MEGA-SENA:</h3>
        <div>Gerador de números</div>
        <div className={styles.linha}>
            
          <form className={styles.selecao}>
            <label className="Qdt">Quantidade de números: </label>
            
            <input onChange={
              e => setQuantity(e.target.value >=6 && e.target.value <=15 ? parseInt(e.target.value) : e.target.value > 6 ? parseInt(15): parseInt(6))
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
          <List numSorte={numSorte} showUl={showUl} nome={styles.numeroSorte}></List>
        </div>
        <div >
            <div>Último sorteio: {data.numero}</div>  <div>Data:{data.dataApuracao}</div>
            <div className={styles.grid_container}>
                {data.listaDezenas.map((post) => (
                    <div key={post} >{post.substr(1)}
                        </div>
                ))}
              </div>
              <p>{data.acumulado ? `Acumulado `: 'Não acumulado'}, Valor Estimado para o próximo concurso: R${data.valorEstimadoProximoConcurso}</p>
  
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data }}
  }

export default Mega;