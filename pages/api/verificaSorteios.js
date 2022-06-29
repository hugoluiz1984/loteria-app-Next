export async function SorteioMega(CAMINHO){
 const res = await fetch(CAMINHO)
 const data = await res.json()
 console.log(data)
// let dados;
// fetch(CAMINHO)
//     .then(response => response.json())
//     .then(data => dados = data)
//     .catch(console.error);
// return dados;
 return await data
}

