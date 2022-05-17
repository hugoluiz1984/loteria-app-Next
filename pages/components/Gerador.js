

let num_ignorados = [0];

export const Gerador = (quantity,totalNumero, event)=>{
    
    
    
    let qtDeNum ;
    let totNumero = totalNumero
    event.preventDefault();
    let sorte=[];
    qtDeNum=quantity
    
    for (let i = 0; i < quantity; i++){
      sorte.push(GerarNumero(sorte,totNumero ))
    }
    sorte.sort(function(a, b) {
      return a - b;
    });
    //setNumSort(sorte);
    //console.log("teste")
    console.log(sorte)
    return (sorte);
  }

  function GerarNumero(existente, totNumero){
    let NumNovo = parseInt(Math.random() * totNumero, 10) + 1;
    if (existente.indexOf(NumNovo) !== -1 || num_ignorados.indexOf(NumNovo) !== -1) NumNovo = GerarNumero(existente, totNumero);
    return NumNovo
  }