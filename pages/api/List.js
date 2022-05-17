import React from 'react';
import styles from '../../styles/Home.module.css';

function List(props){

  return (
      <div className="lista">
        <div className={props.showUl ? styles.show : styles.unShow}>

          {props && props.numSorte.map(i=><div key={[i]} className={props.nome}>{[i]}</div>)}
        </div>  
          
    
      </div>
  )
}

export default List;