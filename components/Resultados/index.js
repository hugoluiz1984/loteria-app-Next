import React, {useState, useEffect} from 'react';
import styles from '../../styles/Home.module.css';
import {SorteioMega} from '../../pages/api/verificaSorteios';
function Resultados(props){
    const [data, setData] = useState('');

    useEffect(() => {
        let resp = (SorteioMega(props.CAMINHO).then());
        console.log(resp)
        setData(resp);
       }, []);
    useEffect(() => {
        console.log(data.PromiseResult)
    },[data])
  return (
    <div className={styles.caixa}>
        <h3>Resultado</h3>
        <p>Último sorteio: {data.numero}</p>  <p>Data: {data.dataApuracao}</p>
        <div className={styles.grid_container}>
            {data.listaDezenas&&data.listaDezenas.map((post) => (
                <div key={post} >{post}
                    </div>
            ))}
        </div>
      <p>{data.acumulado ? `Acumulado, `: ''} Valor Estimado para o próximo concurso: {data.valorEstimadoProximoConcurso&&data.valorEstimadoProximoConcurso.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        {console.log(data)}
    </div>
  )
}

export default Resultados;